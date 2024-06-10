export interface Curso {
  id: number;
  nome: string;
  nomeProfessor: string;
  duracao: number;
  descricao: string;
  valor: string;
  programa: ProgramaCurso[];
}

export interface ProgramaCurso {
  aula: number;
  titulo: string;
  duracao: number;
}