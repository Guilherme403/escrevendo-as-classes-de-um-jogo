// Definindo a classe Heroi
class Heroi {
    // Construtor da classe com as propriedades nome, idade e tipo
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Método atacar
    atacar() {
      let ataque;
  
      // Definindo o ataque com base no tipo do herói
      switch (this.tipo) {
        case 'mago':
          ataque = 'magia';
          break;
        case 'guerreiro':
          ataque = 'espada';
          break;
        case 'monge':
          ataque = 'artes marciais';
          break;
        case 'ninja':
          ataque = 'shuriken';
          break;
        default:
          ataque = 'realizou um ataque';
      }
  
      // Exibindo a mensagem do ataque
      console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
  }
  
  // Exemplo de uso da classe Heroi
  const heroiMago = new Heroi('Merlin', 200, 'mago');
  const heroiGuerreiro = new Heroi('Arthur', 40, 'guerreiro');
  const heroiMonge = new Heroi('Lee', 400, 'monge');
  const heroiNinja = new Heroi('Hanzo', 21, 'ninja');
  
  // Chamando o método atacar para cada herói
  heroiMago.atacar();
  heroiGuerreiro.atacar();
  heroiMonge.atacar();
  heroiNinja.atacar();
  