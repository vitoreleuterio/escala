let users = [
    {
        id: 1, 
        nome: 'Ana V.',
        limit: 3,
        funcoes: [
            {cod: 0,  status: 3},
            {cod: 1,  status: 3},
            {cod: 2,  status: 3},
            {cod: 3,  status: 3},
        ],
        condicoes: [
            {tipo: 1, dia_semana: ['qua'], sequencia: [4], funcao: [0,1,2,3], local: ['Perpetuo',] },
            {tipo: 1, dia_semana: ['seg', 'ter', 'qui', 'sex'], sequencia: [2,3,], funcao: [0,1,2,3], local: ['Paróquia', 'Perpetuo',] },
            {tipo: 1, dia_semana: ['sab', 'dom'], sequencia: [2,3, 4,5], funcao: [0,1,2,3], local: ['Paróquia', 'Perpetuo', 'São José', 'Frei Galvão'] },
            {tipo: 3, dia_semana: ['feriado'], sequencia: [1,2, 3, 4,5],  funcao: [0,1,2,3], local: ['Paróquia', 'Perpetuo', 'São José', 'Frei Galvão'] },
        ]  
        
    },
    {
        id: 1, 
        nome: 'Victor',
        limit: 6,
        funcoes: [
            {cod: 0,  status: 3},
            {cod: 1,  status: 3},
            {cod: 2,  status: 3},
            {cod: 3,  status: 3},
        ],
        condicoes: [
            {tipo: 4, dia_semana: [11], funcao: [0,1, 2, 3], sequencia: [], local: ['São Miguel']},

            {tipo: 1, dia_semana: ['sab', 'dom'], sequencia: [1,2,3, 4,5], funcao: [0,1,2,3], local: ['Paróquia', 'Perpetuo', 'São José', 'Frei Galvão', 'São Miguel'] },
            {tipo: 3, dia_semana: ['feriado'], sequencia: [1,2,3, 4,5],  funcao: [0,1,2,3], local: ['Paróquia', 'Perpetuo', 'São José', 'Frei Galvão', 'São Miguel'] },

        ]  
    },
    {
        id: 1, 
        limit: 3,
        nome: 'José', 
        funcoes: [
            {cod: 0,  status: 3},
            {cod: 1,  status: 3},
            {cod: 2,  status: 3},
            {cod: 3,  status: 3},
        ],
        condicoes: [
            {tipo: 1, dia_semana: ['sab', 'dom'], sequencia: [1,2, 4,5], funcao: [0,1,2,3], local: ['Paróquia', 'Perpetuo', 'São José', 'Frei Galvão', 'São Miguel'] },
            {tipo: 3, dia_semana: ['feriado'], sequencia: [1,2,3, 4,5],  funcao: [0,1,2,3], local: ['Paróquia', 'Perpetuo', 'São José', 'Frei Galvão', 'São Miguel'] },
        ]  
    },
    {
        id: 1, 
        limit: 3,
        nome: 'Agata',
        funcoes: [
            {cod: 0,  status: 2},
            {cod: 1,  status: 2},
            {cod: 2,  status: 3},
            {cod: 3,  status: 2},
        ],
        condicoes: [
            {tipo: 1, dia_semana: ['dom'], sequencia: [1,2,3,5], funcao: [0,1,2,3], local: ['Paróquia', 'Perpetuo', 'São José','São Miguel'] },
            {tipo: 3, dia_semana: ['feriado'], sequencia: [1,2,3, 4,5],  funcao: [0,1,2,3], local: ['Paróquia', 'Perpetuo', 'São José', 'Frei Galvão', 'São Miguel'] },
        ]  
    },
    {
        id: 1, 
        limit: 5,

        nome: 'Tiago',
        funcoes: [
            {cod: 0,  status: 3},
            {cod: 1,  status: 2},
            {cod: 2,  status: 2},
            {cod: 3,  status: 1},
        ],
        condicoes: [
            {tipo: 1, dia_semana: ['sex'], sequencia: [1], funcao: [0,1,2,3], local: ['Paróquia'] },
            {tipo: 1, dia_semana: ['sab', 'dom'], sequencia: [1,2,3, 4,5], funcao: [0,1,2,3], local: ['Paróquia', 'Perpetuo', 'São José', 'Frei Galvão'] },
            {tipo: 3, dia_semana: ['feriado'], sequencia: [1,2,3, 4,5],  funcao: [0,1,2,3], local: ['Paróquia', 'Perpetuo', 'São José', 'Frei Galvão'] },
        ]  
    },
    {
        id: 1, 
        limit: 2,

        nome: 'Kauã',
        funcoes: [
            {cod: 0,  status: 3},
            {cod: 1,  status: 2},
            {cod: 2,  status: 2},
            {cod: 3,  status: 1},
        ],
        condicoes: [
            {tipo: 1, dia_semana: ['sex'], sequencia: [1], funcao: [0,1,2,3], local: ['Paróquia'] },
            {tipo: 1, dia_semana: ['sab', 'dom'], sequencia: [1,2,3, 4,5], funcao: [0,1,2,3], local: ['Paróquia', 'Perpetuo', 'São José', 'Frei Galvão'] },
            {tipo: 3, dia_semana: ['feriado'], sequencia: [1,2,3, 4,5],  funcao: [0,1,2,3], local: ['Paróquia', 'Perpetuo', 'São José', 'Frei Galvão'] },
        ]  
    },
    {
        id: 1, 
        limit: 3,
        nome: 'Douglas',
        funcoes: [
            {cod: 0,  status: 2},
            {cod: 1,  status: 2},
            {cod: 2,  status: 2},
            {cod: 3,  status: 1},
        ],
        condicoes: [
            {tipo: 1, dia_semana: ['sex'], sequencia: [1], funcao: [0,1,2,3], local: ['Paróquia'] },
            {tipo: 1, dia_semana: ['sab', 'dom'], sequencia: [1,2,3, 4,5], funcao: [0,1,2,3], local: ['Paróquia', 'Perpetuo', 'São José', 'Frei Galvão'] },
            {tipo: 3, dia_semana: ['feriado'], sequencia: [1,2,3, 4,5],  funcao: [0,1,2,3], local: ['Paróquia', 'Perpetuo', 'São José', 'Frei Galvão'] },
        ]  
    },
    {
        id: 1, 
        limit: 5,
        nome: 'Guilherme',
        funcoes: [
            {cod: 0,  status: 2},
            {cod: 1,  status: 2},
            {cod: 2,  status: 2},
            {cod: 3,  status: 1},
        ],
        condicoes: [
            {tipo: 1, dia_semana: ['sex'], sequencia: [1], funcao: [0,1], local: ['Paróquia'] },
            {tipo: 1, dia_semana: ['sab', 'dom'], sequencia: [1,2,3, 4,5], funcao: [0,1,2,3], local: ['Paróquia', 'Perpetuo', 'São José', 'Frei Galvão', 'São Miguel'] },
            {tipo: 3, dia_semana: ['feriado'], sequencia: [1,2,3, 4,5],  funcao: [0,1,2,3], local: ['Paróquia', 'Perpetuo', 'São José', 'Frei Galvão'] },
        ]  
    },
    {
        id: 1, 
        limit: 6,

        nome: 'Ana I.',
        funcoes: [
            {cod: 0,  status: 3},
            {cod: 1,  status: 3},
            {cod: 2,  status: 3},
            {cod: 3,  status: 3},
        ],
         condicoes: [
            {tipo: 1, dia_semana: ['dom'], sequencia: [1], funcao: [0,1,2,3], local: ['Paróquia'] },

                {tipo: 1, dia_semana: ['seg', 'ter', 'qua', 'qui'], sequencia: [1,2,3, 4,5], funcao: [0,1,2,3], local: ['Paróquia', 'Perpetuo',] },
                {tipo: 1, dia_semana: ['sab', 'dom'], sequencia: [1], funcao: [0,1,2,3], local: ['Paróquia', 'Perpetuo', 'São José', 'Frei Galvão'] },
                {tipo: 3, dia_semana: ['feriado'], sequencia: [1,2, 3, 4,5],  funcao: [0,1,2,3], local: ['Paróquia', 'Perpetuo', 'São José', 'Frei Galvão'] },
            ] 
        
    },
    {
        id: 1, 
        limit: 5,

        nome: 'Matheus A.',
        funcoes: [
            {cod: 0,  status: 3},
            {cod: 1,  status: 3},
            {cod: 2,  status: 2},
            {cod: 3,  status: 3},
        ],
        condicoes: [
            {tipo: 1, dia_semana: ['sab', 'dom'], sequencia: [1,2, 4,5], funcao: [0,1,2,3], local: ['Paróquia', 'Perpetuo', 'São José', 'Frei Galvão', 'São Miguel'] },
            {tipo: 3, dia_semana: ['feriado'], sequencia: [1,2,3, 4,5],  funcao: [0,1,2,3], local: ['Paróquia', 'Perpetuo', 'São José', 'Frei Galvão', 'São Miguel' ]},
        ]  
    },
    {
        id: 1, 
        limit: 6,

        nome: 'Vitor N',
        funcoes: [
            {cod: 0,  status: 3},
            {cod: 1,  status: 3},
            {cod: 2,  status: 2},
            {cod: 3,  status: 1},
        ],
        condicoes: [
            {tipo: 1, dia_semana: ['sex'], sequencia: [1,2,3, 4,5],  funcao: [0,1,2,3], local: ['São Miguel'] },
            {tipo: 1, dia_semana: ['dom'], sequencia: [1, 3],  funcao: [0,1,2,3], local: ['Paróquia', 'Perpetuo', 'São José', 'Frei Galvão', 'São Miguel'] },


            {tipo: 1, dia_semana: ['seg', 'ter', 'qua', 'qui', 'sab',], sequencia: [1,2,3, 4,5], funcao: [0,1,2,3], local: ['Paróquia', 'Perpetuo', 'São José', 'Frei Galvão', 'São Miguel'] },
        ]  
    },
    {
        id: 1, 
        limit: 6,

        nome: 'Rafael',
        funcoes: [
            {cod: 0,  status: 2},
            {cod: 1,  status: 3},
            {cod: 2,  status: 2},
            {cod: 3,  status: 1},
        ],
        condicoes: [
            {tipo: 1, dia_semana: ['sex'], sequencia: [2,4],  funcao: [0,1,2,3], local: ['São Miguel'] },
            {tipo: 1, dia_semana: ['dom'], sequencia: [1, 3],  funcao: [0,1,2,3], local: ['Paróquia', 'Perpetuo', 'São José', 'Frei Galvão', 'São Miguel'] },

            {tipo: 1, dia_semana: ['seg', 'ter', 'qua', 'qui', 'sab',], sequencia: [1,2,3, 4,5], funcao: [0,1,2,3], local: ['Paróquia', 'Perpetuo', 'São José', 'Frei Galvão', 'São Miguel'] },
        ]  
    },
    {
        id: 1, 
        limit: 5,

        nome: 'David',
        funcoes: [
            {cod: 0,  status: 2},
            {cod: 1,  status: 2},
            {cod: 2,  status: 1},
            {cod: 3,  status: 0},
        ],
        condicoes: [
            {tipo: 1, dia_semana: ['sex'], sequencia: [5],  funcao: [2], local: ['São Miguel'] },
            {tipo: 1, dia_semana: ['seg', 'ter', 'qua', 'qui', 'sab', 'dom'], sequencia: [1,2,3, 4,5], funcao: [0,1,2], local: ['Paróquia', 'Perpetuo', 'São José', 'Frei Galvão', 'São Miguel'] },
        ]  
    },
    {
        id: 1, 
        limit: 6,
        nome: 'Agata M.',
        funcoes: [
            {cod: 0,  status: 0},
            {cod: 1,  status: 2},
            {cod: 2,  status: 2},
            {cod: 3,  status: 0},
        ],
        condicoes: [
            {tipo: 1, dia_semana: ['sex'], sequencia: [2, 4],  funcao: [0,1,2], local: ['São Miguel'] },
            {tipo: 1, dia_semana: ['dom'], sequencia: [2,4],  funcao: [0,1,2], local: ['Paróquia', 'Perpetuo', 'São José', 'Frei Galvão'] },

            {tipo: 1, dia_semana: ['seg', 'ter', 'qua', 'qui', 'sab',], sequencia: [1,2,3, 4,5], funcao: [0,1,2], local: ['Paróquia', 'Perpetuo', 'São José', 'Frei Galvão', 'São Miguel'] },
        ]  
    },
    {
        id: 1, 
        limit: 6,

        nome: 'Davi',
        funcoes: [
            {cod: 0,  status: 0},
            {cod: 1,  status: 2},
            {cod: 2,  status: 2},
            {cod: 3,  status: 0},
        ],
        condicoes: [
            {tipo: 1, dia_semana: ['seg', 'ter', 'qua', 'qui', 'sab', 'dom'], sequencia: [1,2,3, 4,5], funcao: [0,1,2], local: ['Paróquia', 'Perpetuo', 'São José', 'Frei Galvão'] },
        ]  
    },
    {
        id: 1, 
        limit: 5,

        nome: 'Eduarda',
        funcoes: [
            {cod: 0,  status: 3},
            {cod: 1,  status: 3},
            {cod: 2,  status: 3},
            {cod: 3,  status: 3},
        ],
        condicoes: [
            {tipo: 1, dia_semana: ['dom'], sequencia: [2], funcao: [0,1,2,3], local: ['Paróquia']},

            {tipo: 1, dia_semana: ['sab', 'dom'], sequencia: [1,3, 4,5], funcao: [0,1,2,3], local: ['São Miguel','Paróquia', 'Perpetuo', 'São José', 'Frei Galvão', 'São Miguel' ]},
            {tipo: 3, dia_semana: ['feriado'], sequencia: [1,2,3, 4,5],  funcao: [0,1,2,3], local: ['São Miguel','Paróquia', 'Perpetuo', 'São José', 'Frei Galvão', 'São Miguel' ]},
        ]  
    },
    {
        id: 1, 
        limit: 5,

        nome: 'Tainá',
        funcoes: [
            {cod: 0,  status: 1},
            {cod: 1,  status: 2},
            {cod: 2,  status: 1},
            {cod: 3,  status: 0},
        ],
        condicoes: [
            {tipo: 1, dia_semana: ['sab', 'dom'], sequencia: [1,2,3, 4,5], funcao: [0,1,2,3], local: ['São Miguel','Paróquia', 'Perpetuo', 'São José', 'Frei Galvão', 'São Miguel'] },

        ]
        
    },
    {
        id: 1,
        limit: 5,
        nome: 'Bianca',
        funcoes: [
            {cod: 0,  status: 3},
            {cod: 1,  status: 3},
            {cod: 2,  status: 3},
            {cod: 3,  status: 3},
        ],
        condicoes: [
            
            {tipo: 1, dia_semana: ['sab', 'dom'], sequencia: [1,2,3, 4,5], funcao: [0,1,2,3], local: ['São Miguel','Paróquia', 'Perpetuo', 'São José', 'Frei Galvão', 'São Miguel'] },

        ]
        
    },
    
    {
        id: 1, 
        limit: 5,

        nome: 'Crislany',
        funcoes: [
            {cod: 0,  status: 3},
            {cod: 1,  status: 3},
            {cod: 2,  status: 2},
            {cod: 3,  status: 3},
        ],
        condicoes: [
            {tipo: 4, dia_semana: [11], funcao: [0,1, 2, 3], sequencia: [], local: ['São Miguel']},

            {tipo: 1, dia_semana: ['sab', 'dom'], sequencia: [1,2,3, 4,5], funcao: [0,1,2,3], local: ['São Miguel','Paróquia', 'Perpetuo', 'São José', 'Frei Galvão', 'São Miguel'] },

        ]
        
    },
    {
        id: 1,
        limit: 2,
        nome: 'Mateus C.',
        funcoes: [
            {cod: 0,  status: 0},
            {cod: 1,  status: 0},
            {cod: 2,  status: 0},
            {cod: 4,  status: 0},
            {cod: 3,  status: 0},
        ],
        condicoes: [
            {tipo: 1, dia_semana: [ 'dom'], sequencia: [2, 4],  funcao: [4], local: ['Paróquia'] },
        ]
        
    },

    {
        id: 1, 
        limit: 6,

        nome: 'Vitor',
        funcoes: [
            {cod: 0,  status: 3},
            {cod: 1,  status: 3},
            {cod: 2,  status: 3},
            {cod: 3,  status: 3},
        ],
        condicoes: [
            {tipo: 1, dia_semana: ['ter', 'qua', 'qui'], sequencia: [1],  funcao: [0,1,2,3], local: ['São Miguel','Paróquia', 'Perpetuo', 'São José', 'Frei Galvão'] },

            {tipo: 1, dia_semana: ['sab', 'dom'], sequencia: [1,2,3, 4,5],  funcao: [0,1,2,3], local: ['São Miguel','Paróquia', 'Perpetuo', 'São José', 'Frei Galvão'] },
            {tipo: 3, dia_semana: ['feriado'], sequencia: [1,2,3, 4,5],  funcao: [0,1,2,3], local: ['São Miguel','Paróquia', 'Perpetuo', 'São José', 'Frei Galvão'] },
        ]
        
    },

    {
        id: 1, 
        limit: 6,

        nome: 'Giovanni',
        funcoes: [
            {cod: 0,  status: 2},
            {cod: 1,  status: 3},
            {cod: 2,  status: 3},
            {cod: 3,  status: 2},
        ],
        condicoes: [
            {tipo: 1, dia_semana: ['ter'], sequencia: [1,4],  funcao: [0,1,2,3], local: ['Frei Galvão'] },

            {tipo: 1, dia_semana: ['seg', 'ter', 'qua', 'qui', 'sex', 'sab'], sequencia: [1,2,3, 4,5],  funcao: [0,1,2,3], local: ['Paróquia', 'Perpetuo', 'São José', 'Frei Galvão'] },
            {tipo: 1, dia_semana: ['dom'], sequencia: [2,3],  funcao: [0,1,2,3], local: ['Paróquia', 'Perpetuo', 'São José', 'Frei Galvão'] },

        ]
        
    },

    {
        id: 1, 
        limit: 6,

        nome: 'Ingrid',
        funcoes: [
            {cod: 0,  status: 2},
            {cod: 1,  status: 3},
            {cod: 2,  status: 2},
            {cod: 3,  status: 2},
        ],
        condicoes: [
            {tipo: 1, dia_semana: ['sex'], sequencia: [1,5],  funcao: [0,1,2,3], local: ['São Miguel'] },
            {tipo: 1, dia_semana: ['sab', 'dom'], sequencia: [1,2,3, 4,5],  funcao: [0,1,2,3], local: ['São Miguel','Paróquia', 'Perpetuo', 'São José', 'Frei Galvão'] },
            {tipo: 3, dia_semana: ['feriado'], sequencia: [1,2,3, 4,5],  funcao: [0,1,2,3], local: ['São Miguel','Paróquia', 'Perpetuo', 'São José', 'Frei Galvão'] },
       
        ]
        
    },

    {
        id: 1,
        limit: 5,

        nome: 'Letícia',
        funcoes: [
            {cod: 0,  status: 2},
            {cod: 1,  status: 3},
            {cod: 2,  status: 3},
            {cod: 3,  status: 2},
        ],
        condicoes: [
            {tipo: 4, dia_semana: [18, 20], funcao: [0,1, 2, 3], sequencia: [], local: []},
       
        ]
        
    },
]