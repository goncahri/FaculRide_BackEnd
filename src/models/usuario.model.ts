import { Iusuario } from "../interfaces/Iusuario";
import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";

// Atributos criacionais
type UsuarioCreationalAttributes = Optional<Iusuario, "idUsuario">;

export class UsuarioModel extends Model<Iusuario, UsuarioCreationalAttributes> {
  public idUsuario!: number;
  public cpf!: string;
  public ra!: string; // atualizado para string
  public nome!: string;
  public dataNascimento!: Date;
  public genero!: boolean;
  public endereco!: string;
  public email!: string;
  public telefone!: string;
  public tipoUsuario!: "passageiro" | "motorista";
  public cnh?: string;
}

UsuarioModel.init({
  idUsuario: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "idUsuario"
  },
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false,
    field: "nome"
  },
  cpf: {
    type: DataTypes.STRING(14),
    allowNull: false,
    field: "cpf"
  },
  ra: {
    type: DataTypes.STRING(20), // alterado para string
    allowNull: false,
    field: "ra"
  },
  dataNascimento: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    field: "dataNascimento"
  },
  genero: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    field: "genero"
  },
  endereco: {
    type: DataTypes.STRING(100),
    allowNull: false,
    field: "endereco"
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    field: "email"
  },
  telefone: {
    type: DataTypes.STRING(20),
    allowNull: false,
    field: "telefone"
  },
  tipoUsuario: {
    type: DataTypes.ENUM("passageiro", "motorista"),
    allowNull: false,
    field: "tipoUsuario"
  },
  cnh: {
    type: DataTypes.STRING(20),
    allowNull: true,
    field: "cnh"
  }
}, {
  sequelize,
  tableName: "usuario",
  timestamps: false
});