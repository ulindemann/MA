#
# ListGroupMembers.ps1
# Listet AD Gruppen und Mitglieder auf -> rein in Exceltabelle   
#


# Function xlsRow
# Gibt zu einer gegebenen Spaltennummer ide Excelbezeichnung in Buchstaben zurück, z.B. "AE"
# Diese Angabe benötigt man bei Verwendung der Range-Eigenschaft
#
function xlRow([int] $i) {
    If ($i -lt 27) {
        [char]($i + 64)
    } Else {
        [char]([int](($i-1) / 26) + 64) + [char](((($i-1) % 26) + 1) + 64)
    }
}


# Fehlervariable loeschen
$ErrorActionPreference = "SilentlyContinue";
$error.clear()

write-Host "==> Start"

# excel initialisierungen
$xlo = new-object -comobject excel.application
$xlw = $xlo.Workbooks.Add()
$xls = $xlo.Worksheets.Item(1)
$xls.Name = "Alte MD"
write-Host "==> Tabelle Alte MD  erzeugt"

# Holt alle Gruppen aus FSD , ausser Domainlokale
# $Groups = Get-ADGroup -Filter 'GroupScope -ne "DomainLocal"' -SearchBase "OU=FSD,DC=lwnet,DC=local"
$Groups = Get-ADGroup -Filter * -SearchBase "OU=FSD,DC=lwnet,DC=local"

# abklappern
$row = 1
$col = 3
$maxcol = 1

Foreach ( $GName in $Groups ) {

	write-Host $GName.name
	write-Host $GName.GroupScope.ToString()
	$col = 1
	$xls.Cells.Item($row,$col).value = $GName.name
	$col = 2
	$xls.Cells.Item($row,$col).value = $GName.GroupScope.ToString()

	$Members = Get-ADGroupMember -Identity $GName.name
	$col = 3
	Foreach ( $Member in $Members ) {
		$xls.Cells.Item($row,$col).value = $Member.name
		write-Host $Member.name
		++$col
	}
	If ( $col -gt $maxcol ){
		$maxcol = $col
	}
	++$row
}
write-Host $maxcol
# letzte Spalte 
$lastcol = xlRow( $maxcol - 1 )
$lastrow = $row - 1
$rangevar = "A1:$lastcol$lastrow"

write-Host $rangevar
write-Host "==> Ende"

$xls.Range($rangevar).Sort($xls.Range("A1"), $xlDescending) >$null
$xls.range($rangevar).EntireColumn.autofit()

$xlw.Save()
$xlo.Quit()
 