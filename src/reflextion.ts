export function creerNouvelleClasseEnv() {
    const className = process.env.CLASS_NAME ? process.env.CLASS_NAME : 'ClasseAnonyme'; 

    const NouvelleClasse = class {
        _className: string;
        _valeurText: string;
        _valeurNum: number;

        constructor(valeurText: string, valeurNum: number) {
            this._className = className;
            this._valeurText = valeurText;
            this._valeurNum = valeurNum;
        }

        get className(): string {
            return this._className;
        }

        get valeurText(): string {
            return this._valeurText;
        }

        get valeurNum(): number {
            return this._valeurNum;
        }
    };

    return NouvelleClasse;
}
  