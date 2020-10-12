//=============================================================================
// verzeichnisliste.js --  verzeichnis waehlen
//
import React from 'react';
import Nav from 'react-bootstrap/Nav';

// TODO: raus und aus Datenbank holen///
const LocalListe = {
  liste: [
        { id: 1, name: "t_1_anwesenheit", anzeigename: "1 Anwesenheit", link: "0" },
        { id: 2, name: "t_2_abwesenheit", anzeigename: "2 Abwesenheit", link: "1" },
        { id: 3, name: "t_3_aufnahmeinfo", anzeigename: "3 Aufnahme-info Bereich", link: "2" },
        { id: 4, name: "t_4_erhebungsbogen", anzeigename: "4 Erhebungsbogen", link: "3" },
        { id: 5, name: "t_5_datenstammblatt", anzeigename: "5 Datenstammblatt", link: "4" },
        { id: 6, name: "t_6_datenschutz", anzeigename: "6 Datenschutz", link: "5" },
        { id: 7, name: "t_7_foerderplan", anzeigename: "7 Förderplan/Zuarbeit Entwicklungsbericht", link: "6" },
        { id: 8, name: "t_8_kompetenz", anzeigename: "8 Kompetenzanalyse/HB-Ermittlung", link: "7" },
        { id: 9, name: "t_9_kostenuebernahmen", anzeigename: "9 Kostenübernahmen", link: "8"},
        { id: 10, name: "t_10_lohn_ma", anzeigename: "10 Lohn MA", link: "9" },
        { id: 11, name: "t_11_medizin", anzeigename: "11 Medizin", link: "10" },
        { id: 12, name: "t_12_notfallblatt", anzeigename: "12 Notfallblatt", link: "11" },
        { id: 13, name: "t_13_tagesnotizen", anzeigename: "13 Tagesnotizen", link: "12" },
        { id: 14, name: "t_14_vertraege", anzeigename: "14 Verträge", link: "13" },
        { id: 15, name: "t_15_zeugnisse_cv", anzeigename: "15 Zeugnisse/Lebenslauf", link: "14" },
        { id: 16, name: "t_16_notizen", anzeigename: "16 Notizen", link: "15" },
        { id: 17, name: "t_17_praktikum", anzeigename: "17 Praktikum", link: "16" },
        { id: 18, name: "t_18_berichte", anzeigename: "18 Berichte", link: "17" },
        { id: 19, name: "t_19_schriftverkehr_bd", anzeigename: "19 Schriftverkehr BD", link: "18" },
        { id: 20, name: "t_20_sonstiges", anzeigename: "20 Sonstiges", link: "19" },
        { id: 21, name: "t_21_handakte", anzeigename: "21 Handakte", link: "20" },
        { id: 22, name: "t_30_fortbildung", anzeigename: "30 Fortbildung", link: "21" },
        { id: 23, name: "t_31_hamet", anzeigename: "31 Hamet", link: "22" },
        { id: 24, name: "t_32_bildung", anzeigename: "32 Bildung", link: "23" },
        { id: 25, name: "t_33_sprungbrett", anzeigename: "33 Sprungbrett", link: "24" },
        { id: 26, name: "t_34_notizen", anzeigename: "34 Notizen", link: "25" },
        { id: 27, name: "t_50_checklisten", anzeigename: "50 Checklisten", link: "26" },
        { id: 28, name: "t_51_essen", anzeigename: "51 Essen", link: "27" },
        { id: 29, name: "t_53_krankenkasse", anzeigename: "53 Krankenkasse", link: "28" },
        { id: 30, name: "t_54_lohn_ma", anzeigename: "54 Lohn MA", link: "29" },
        { id: 31, name: "t_55_rente", anzeigename: "55 Rente", link: "30" },
        { id: 32, name: "t_56_ausweise", anzeigename: "56 Ausweise", link: "31" },
        { id: 33, name: "t_57_notizen", anzeigename: "57 Notizen", link: "32" },
        { id: 34, name: "t_58_rechnungslegung", anzeigename: "58 Rechnungslegung", link: "33" },
        { id: 35, name: "t_59_vertraege", anzeigename: "59 Verträge", link: "34" },
        { id: 36, name: "t_60_vw_schriftverkehr", anzeigename: "60 VW-Schriftverkehr", link: "35" }         
  ]
};


//===============================================================================================
const VerzeichnisListe = ((props) => {

  const setSelect = ((e) => {

    let dir = LocalListe.liste[e];

    //console.log (e);
    //console.log ( "VerzeichnisListe.setSelect active Dir: " + dir.name );

    props.onVerzChange (dir);
    return ; 
  });

  return (
    <div className="liste-links">
      <Nav className="flex-column" onSelect={setSelect}>
        {LocalListe.liste.map((data, i) => {
          return (
            <Nav.Link 
              eventKey={data.link} 
              key={data.id}>
              {data.anzeigename}
            </Nav.Link>
        )})} 
      </Nav>
    </div>
  );
});
  
export { VerzeichnisListe };    

