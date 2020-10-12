const Muell = (() => {

    const dir = useContext ( DirContext );
  
    return (
  <Nav className="flex-column" onSelect={((e) => {document.title = ''})}>
  <Nav.Link eventKey={dir[0].link}>{dir[0].name}</Nav.Link>
  <Nav.Link eventKey={dir[1].link}>{dir[1].name}</Nav.Link>
  <Nav.Link eventKey="#link3">3 Aufnahme-info Bereich</Nav.Link>
  <Nav.Link eventKey="#link4">4 Erhebungsbogen</Nav.Link>
  <Nav.Link eventKey="#link6">6 Datenschutz</Nav.Link>
  <Nav.Link eventKey="#link7">7 Förderplan/Zuarbeit Entwicklungsbericht</Nav.Link>
  <Nav.Link eventKey="#link8">8 Kompetenzanalyse/HB-Ermittlung</Nav.Link>
  <Nav.Link eventKey="#link9">9 Kostenübernahmen</Nav.Link>
  <Nav.Link eventKey="#link10">10 Lohn MA</Nav.Link>
  <Nav.Link eventKey="#link10">11 Medizin</Nav.Link>
  <Nav.Link eventKey="#link12">12 Notfallblatt</Nav.Link>
  <Nav.Link eventKey="#link13">13 Tagesnotizen</Nav.Link>
  <Nav.Link eventKey="#link14">14 Verträge</Nav.Link>
  <Nav.Link eventKey="#link15">15 Zeugnisse/Lebenslauf</Nav.Link>
  <Nav.Link eventKey="#link16">16 Notizen</Nav.Link>
  <Nav.Link eventKey="#link17">17 Praktikum</Nav.Link>
  <Nav.Link eventKey="#link18">18 Berichte</Nav.Link>
  <Nav.Link eventKey="#link19">19 Schriftverkehr BD</Nav.Link>
  <Nav.Link eventKey="#link20">20 Sonstiges</Nav.Link>
  <Nav.Link eventKey="#link1">21 Handakte</Nav.Link>
  <Nav.Link eventKey="#link1">30 Fortbildung</Nav.Link>
  <Nav.Link eventKey="#link1">31 Hamet</Nav.Link>
  <Nav.Link eventKey="#link1">32 Bildung</Nav.Link>
  <Nav.Link eventKey="#link1">33 Sprungbrett</Nav.Link>
  <Nav.Link eventKey="#link1">34 Notizen</Nav.Link>
  <Nav.Link eventKey="#link1">50 Checklisten</Nav.Link>
  <Nav.Link eventKey="#link1">51 Essen</Nav.Link>
  <Nav.Link eventKey="#link1">53 Krankenkasse</Nav.Link>
  <Nav.Link eventKey="#link1">54 Lohn MA</Nav.Link>
  <Nav.Link eventKey="#link1">55 Rente</Nav.Link>
  <Nav.Link eventKey="#link1">56 Ausweise</Nav.Link>
  <Nav.Link eventKey="#link1">57 Notizen</Nav.Link>
  <Nav.Link eventKey="#link1">58 Rechnungslegung</Nav.Link>
  <Nav.Link eventKey="#link1">59 Verträge</Nav.Link>
  <Nav.Link eventKey="#link1">60 VW-Schriftverkehr</Nav.Link>
  </Nav>
  );
  });