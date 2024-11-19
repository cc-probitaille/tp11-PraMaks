import { creerNouvelleClasseEnv } from '../reflextion';

describe('Tests pour creerNouvelleClasseEnv', () => {

  it('devrait créer une classe avec un nom de classe de CLASS_NAME', () => {
    process.env.CLASS_NAME = 'NomDeMaClasse';
    const nomClasse = process.env.CLASS_NAME;
    const ClassReflexion = creerNouvelleClasseEnv(); 
    const instance = new ClassReflexion('Texte', 5); 

    expect(instance.className).toBe(nomClasse); 
    expect(instance.valeurText).toEqual('Texte');
    expect(instance.valeurNum).toEqual(5);
  });

  it('devrait créer une classe avec un nom de classe anonyme, car le CLASS_NAME est absent', () => {
    delete process.env.CLASS_NAME; 

    const ClassReflexion = creerNouvelleClasseEnv(); 
    const instance = new ClassReflexion('Texte', 5); 

    expect(instance.className).toBe('ClasseAnonyme'); 
    expect(instance.valeurText).toEqual('Texte');
    expect(instance.valeurNum).toEqual(5);
  });

});
