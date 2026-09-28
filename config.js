// Configuração do EPI Uai (uma por instalação / cliente)
// A chave "publishable" é pública por natureza: quem protege os dados
// é o login + as regras de segurança criadas pelo arquivo schema.sql.
window.EPI_CONFIG = {
  supabaseUrl: 'https://oqsqnzpqmmcjgpvauztg.supabase.co',
  supabaseAnonKey: 'sb_publishable_LltDhC0pk6QJsUkgNp3gfw_jFFkuYiz',

  // Marca do produto (aparece no login, no menu e no rodapé das fichas)
  produto: {
    nome: 'EPI Uai',               // nome comercial do sistema
    subtitulo: 'Uso Assegurado e Identificado',
    fornecedor: '',                // ex.: 'GPA Consulting' (deixe vazio para não exibir)
    contatoSuporte: ''             // ex.: 'suporte@suaempresa.com.br · (31) 9xxxx-xxxx'
  }
};
