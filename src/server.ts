// =========================================================
// API RESTFUL - GESTÃO DE CHAMADOS DE TI (HELP DESK)
// TECNOLOGIAS: NODE.JS, TYPESCRIPT, EXPRESS (SIMULAÇÃO)
// =========================================================

// 1. Definição das Interfaces (Tipagem estática com TypeScript)
export interface Chamado {
    id: number;
    titulo: string;
    descricao: string;
    categoria: 'Redes' | 'Sistemas' | 'Hardware' | 'Acessos';
    prioridade: 'Baixa' | 'Média' | 'Alta' | 'Crítica';
    status: 'Aberto' | 'Em Andamento' | 'Resolvido';
    dataAbertura: Date;
}

// 2. Base de Dados em Memória (Mock)
const chamados: Chamado[] = [
    {
        id: 1,
        titulo: 'Erro ao acessar o banco Oracle',
        descricao: 'Usuário sem permissão na tabela de relatórios.',
        categoria: 'Sistemas',
        prioridade: 'Alta',
        status: 'Aberto',
        dataAbertura: new Date()
    },
    {
        id: 2,
        titulo: 'Lentidão na rede do SIG',
        descricao: 'Oscilação de conexão no switch principal.',
        categoria: 'Redes',
        prioridade: 'Crítica',
        status: 'Em Andamento',
        dataAbertura: new Date()
    }
];

// 3. Controladores de Rotas da API (CRUD / REST)

// GET /api/chamados - Listar todos os chamados
export function listarChamados(): Chamado[] {
    return chamados;
}

// GET /api/chamados/:id - Buscar chamado por ID
export function buscarChamadoPorId(id: number): Chamado | undefined {
    return chamados.find(c => c.id === id);
}

// POST /api/chamados - Criar novo chamado
export function criarChamado(novoChamado: Omit<Chamado, 'id' | 'dataAbertura' | 'status'>): Chamado {
    const chamadoCriado: Chamado = {
        id: chamados.length + 1,
        ...novoChamado,
        status: 'Aberto',
        dataAbertura: new Date()
    };
    chamados.push(chamadoCriado);
    return chamadoCriado;
}

// PATCH /api/chamados/:id/status - Atualizar status do chamado
export function atualizarStatusChamado(id: number, novoStatus: Chamado['status']): Chamado | null {
    const chamado = buscarChamadoPorId(id);
    if (!chamado) return null;
    
    chamado.status = novoStatus;
    return chamado;
}

// 4. Teste de execução simulado
console.log("=== LISTA DE CHAMADOS INICIAIS ===");
console.log(listarChamados());

console.log("\n=== CRIANDO NOVO CHAMADO DA TI ===");
const criado = criarChamado({
    titulo: 'Instalação de Power BI Desktop',
    descricao: 'Solicitação de instalação para novo estagiário.',
    categoria: 'Hardware',
    prioridade: 'Média'
});
console.log(criado);

console.log("\n=== ATUALIZANDO STATUS DO CHAMADO 1 ===");
console.log(atualizarStatusChamado(1, 'Resolvido'));
