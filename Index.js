class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = "L1onex";
    this.idade = 31;
    this.tipo = "mago";
  }

  atacar() {
    let ataque;
    switch (this.tipo) {
      case 'mago':
        ataque = 'usou magia';
        break;
      case 'guerreiro':
        ataque = 'usou espada';
        break;
      case 'monge':
        ataque = 'usou artes marciais';
        break;
      case 'ninja':
        ataque = 'usou shuriken';
        break;
      default:
        ataque = 'não especificado';
    }
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}
const heroi = new Heroi('Aragorn', 30, 'guerreiro');
heroi.atacar();
