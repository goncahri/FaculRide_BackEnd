export interface Iusuario {
    idUsuario?: number;
    nome: string;
    cpf: string;
    ra: string; 
    dataNascimento: Date;
    genero: boolean;
    endereco: string;
    email: string;
    telefone: string;
    tipoUsuario: "passageiro" | "motorista";
    cnh?: string; // obrigatório se tipoUsuario === "motorista"
  }
  
  export interface IusuarioFiltros {
    nome?: string;
    email?: string;
    tipoUsuario?: "passageiro" | "motorista";
  }
  
  export interface IRetornoCadastroUsuario {
    id: number;
  }
  