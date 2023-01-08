# Variables

## Different keywords:
- var (nie powinno się używać, tylko jak potrzebujesz zasięg funkcyjny)
- let (zmienna)
- const (stała — domyślnie tą należy używać)

---

| x | var | let | const |
| ---: | :---: | :---: |:---:|
| redeclaration | ok (quirks mode) | no | no |
| reinitialization | ok | ok | no |
| scope | function | block | block |
| hoisting | ok | ok (TDZ) | ok |
