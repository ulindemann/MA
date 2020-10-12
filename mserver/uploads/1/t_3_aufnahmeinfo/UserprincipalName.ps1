# Nur fuer Personal, Mitarbeiter OU= entsprechend setzen

Get-ADUser -Filter * -Properties UserPrincipalName -SearchBase "OU=Personal,OU=FSD,DC=lwnet,DC=local" | % {Set-ADUser $_ -UserPrincipalName ( $_.SamAccountName + '@lwnet.de' )}