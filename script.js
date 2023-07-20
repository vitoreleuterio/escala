
function gerarArrayDiasSemana(ano, mes, feriados) {
    const diasSemana = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'];
    const arrayDiasSemana = [];
  
    // Obter o último dia do mês
    const ultimoDia = new Date(ano, mes, 0).getDate();
  
    for (let dia = 1; dia <= ultimoDia; dia++) {
      const data = new Date(ano, mes - 1, dia);
      const diaSemana = diasSemana[data.getDay()];
      const Isferiado =  feriados.includes(dia) ? true : false; 
  
      arrayDiasSemana.push({ dia, d_sem: diaSemana, feriado: Isferiado, events: [] });
    }
    return arrayDiasSemana;
  }

  const funcoesArray = [
      {id: 0, descricao:  'Librífero', color: '#0EA54C'},
      {id: 1, descricao:  'Microfone', color:'#FD1708'},
      {id: 2, descricao:  'Credência', color:  '#0066FF'},
      {id: 4, descricao:  'Manustérgio', color: '#0066FF'},
      {id: 3, descricao:  'Turiferário', color:'#000000' }
  ]
  
  function AddEventtoDay(dia, horario, local, funcoes, tipo, add, nivel, currentArray){
  
      let Array = []
      Array=currentArray
      
      if(dia && horario && local && funcoes){
  
          idx = Array.findIndex(p => p.dia == dia)
          if(idx >= 0){
              let arrayFuncoes = []
             
              for(let i=0; i<funcoes.length; i++){
              let idxf = funcoesArray.findIndex(p => p.id == funcoes[i])
              if(idxf>= 0) arrayFuncoes.push({id: funcoesArray[idxf].id, nome: undefined, nivel: 0})
              }
             let indice = Array[idx].events.findIndex(p => p.horario == horario)
              if(indice>=0 && add==false){
                  Array[idx].events[indice] ={horario: horario, tipo: tipo, local: local, nivel: nivel, funcoes:  arrayFuncoes}
  
              }
              else{
                  Array[idx].events.push({horario: horario, tipo: tipo, local: local,nivel: nivel, funcoes:  arrayFuncoes, })
              }
          }
      }
      return Array
  }
  
  function CreateTarefa(d_semana, horario, local, funcoes, tipo, data, sequencia, nivel, add=false){
  // 
      let array = data
  
      let diasFilter = array.filter(p=> p.d_sem == d_semana)
      if(sequencia){
        let diasSequencias = []
         for(const seq of sequencia){
            diasSequencias.push(diasFilter[seq-1])
         }
       
         
         diasFilter = diasSequencias
      }
      let newArray = array
      for(const dia of diasFilter){
          idx = newArray.findIndex(p => p.dia == dia.dia)
          if(idx>= 0 ){
              newArray =  AddEventtoDay(dia.dia, horario, local, funcoes, tipo, add, nivel, newArray)
          }
      }
  // console.log(newArray)
  return newArray
   
  
  }
  
  let dias = gerarArrayDiasSemana(2023, 8, [10, 8, 26])
  
  let newTarefa = CreateTarefa('ter', '19h30', 'Frei Galvão', [0,1], 'Missa', dias,false, 3 )
  newTarefa = CreateTarefa('qua', '19h30', 'Perpetuo', [2], 'Celebração', newTarefa, false, 1)
  newTarefa = CreateTarefa('qua', '19h30', 'Perpetuo', [0,1], 'Missa', newTarefa, [3],3)
  
  newTarefa = CreateTarefa('sex', '08h00', 'Paróquia', [0,1], 'Missa', newTarefa, [1], 3)
  newTarefa = CreateTarefa('sex', '19h30', 'São Miguel', [2], 'Celebração', newTarefa, false, 1)
  newTarefa = CreateTarefa('qui', '19h30', 'Paróquia', [0,1,2,3], 'Missa', newTarefa, false, 8)
  newTarefa = CreateTarefa('sex', '19h30', 'São Miguel', [0,1], 'Missa', newTarefa, [2], 3)
  
  newTarefa = CreateTarefa('sab', '19h30', 'Frei Galvão', [0,1], 'Missa', newTarefa, false, 3)
  newTarefa = CreateTarefa('dom', '08h00', 'São José', [0,1], 'Missa', newTarefa, false, 3)
  newTarefa = CreateTarefa('dom', '17h00', 'São Miguel', [0,1], 'Missa', newTarefa, [4], 3)
  newTarefa = CreateTarefa('dom', '17h00', 'Perpetuo', [0,1], 'Missa', newTarefa, [1], 3)
  newTarefa = CreateTarefa('dom', '09h30', 'Paróquia', [0,1,2],'Missa', newTarefa, false, 6)
  newTarefa = CreateTarefa('dom', '19h00', 'Paróquia', [0,1,2],'Missa', newTarefa, false, 6)
  
  newTarefa = CreateTarefa('dom', '09h30', 'Paróquia', [0,1,2,3], 'Missa', newTarefa, [1,3],  false)
  newTarefa = CreateTarefa('dom', '09h30', 'Paróquia', [0,1,2,4], 'Missa', newTarefa, [2,4],  false)

  newTarefa = CreateTarefa('dom', '19h00', 'Paróquia', [0,1,2,3], 'Missa', newTarefa, [1,3],  false)

  
  
  
  
  function userSave(nome, funcoes, negacoes, id, data){
  
      let currentArray = data
  
      let idx = -1;
      if(currentArray.length > 0){
          if(id>0){
              idx =  currentArray.findIndex(p => p.id == id)
          }
      }
  
      let user = {id, nome, funcoes, negacoes}
  
      user.id = idx >= 0 ? currentArray[idx].id : currentArray.length+1
      user.nome = nome 
      user.funcoes= funcoes
          // {id: 0, status: 1 },   // 0 - não 1-uma vez 2-conhece 3-ótimo 
          // {id: 1, status: 1 },   // 0 - não 1-uma vez 2-conhece 3-ótimo 
          // {id: 2, status: 1 },   // 0 - não 1-uma vez 2-conhece 3-ótimo 
          // {id: 3, status: 1 },   // 0 - não 1-uma vez 2-conhece 3-ótimo 
       
       user.negacoes = negacoes
          // {local: []},
          // {semanal: true},
          // {familia: []}
          if(idx>=0)   currentArray[idx] = user
          if(idx<0)    currentArray.push(user)
  
  return currentArray
  }
  


function verificarCondicoes(usuario, diasSemana, sequencia, dia_esp, local, funcao) {
   
// if(usuario.peso) usuario.peso = 0
    return usuario.condicoes.some(condicao => {
   
     let result1 = condicao.tipo != 4?  condicao.local.includes(local): true
     
     let result2 = condicao.tipo != 4 ? condicao.dia_semana.includes(diasSemana) : true

     let result3 = condicao.tipo == 4 ? condicao.dia_semana.includes(dia_esp) : true
     
     
     let result4 = condicao.tipo != 4 ? condicao.sequencia.includes(sequencia+1) : true
     
     
     let result5 = condicao.funcao.includes(funcao) 
    
     let repeticao = usuario.repeticao? usuario.repeticao : 0
     let status = usuario.funcoes.find(p => p.cod == funcao)
     if(result1 && result2 && result3 && result4 && result5){
        
        if(usuario.peso) usuario.peso =  usuario.peso + addPeso(condicao.tipo == 4, condicao.sequencia.length,condicao.dia_semana.length,  result2, condicao.local.length, condicao.funcao.length, result4, status.status, repeticao )
        if(!usuario.peso) usuario.peso =  addPeso(condicao.tipo == 4, condicao.sequencia.length,condicao.dia_semana.length, result2, condicao.local.length, condicao.funcao.length, result4, status.status, repeticao )
        return true
     }
     else{
        return false
     }
    
    });
    
  }
  
  GenerateEscala(newTarefa, users)

function addPeso(isDayEspecific, qtdSequencia, dias, dia_semana, qtdlocal, qtdfuncao, issequencia, status, repeticao){

 let cont = 20;

 isDayEspecific == true ? cont=cont+40 : cont;
if(!isDayEspecific) cont = cont + 10 - (dias*3)
 cont = issequencia ? cont + 10 : cont - 5 

    dia_semana == true ? cont=cont+25 : cont;
    cont= cont - (qtdSequencia*3);
    cont= cont - (qtdlocal * 2);
    cont= cont - (qtdfuncao * 2);
     cont = cont + (status*4)
     cont= cont-(repeticao*5)
return cont



}

function GenerateEscala(escala, users){

    let arrayEscala = [] 
    arrayEscala = escala;
    let arrayUsers = [] 
    arrayUsers= users;

    let newEscala = []
    if(arrayEscala.length == 0 || arrayUsers.length == 0){
        return newEscala
    }
    for(const dia of  arrayEscala){
      
        let sequencia = arrayEscala.filter(p => p.d_sem == dia.d_sem)

        let idxs = sequencia.findIndex(p => p.dia == dia.dia)
        let filterUsers = []
        

               for(const event of dia.events){
               
             for(const funcao of event.funcoes){
                // if(dia.dia ==6) debugger<div class="container">
  
               filterUsers = filtragemGeral(dia.dia, arrayEscala, arrayUsers, 4, dia.d_sem, idxs, event.local, funcao.id)
               filterUsers =  filterUsers.length== 0 ? filtragemGeral(dia.dia, arrayEscala, arrayUsers, 3, dia.d_sem, idxs, event.local, funcao.id) : filterUsers

               filterUsers =  filterUsers.length== 0 ? filtragemGeral(dia.dia, arrayEscala, arrayUsers, 2, dia.d_sem, idxs, event.local, funcao.id) : filterUsers
               filterUsers =  filterUsers.length== 0 ? filtragemGeral(dia.dia, arrayEscala, arrayUsers, 1, dia.d_sem, idxs, event.local, funcao.id) : filterUsers
               filterUsers =  filterUsers.length== 0 ? filtragemGeral(dia.dia, arrayEscala, arrayUsers, 0, dia.d_sem, idxs, event.local, funcao.id) : filterUsers

           if(funcao.id ==3)   filterUsers = filterUsers.sort((a, b) => b.funcoes[funcao.id].status - a.funcoes[funcao.id].status).map(p=> {p.peso = p.peso+p.funcoes[funcao.id].status*10; return p})
            
                funcao.nome = filterUsers.length>0 ? sortearNome(filterUsers) :undefined 
                funcao.nivel = arrayUsers.filter(p => p.nome == funcao.nome).map(p => p.funcoes[funcao.id]).map(p => p.status)[0]
           
                if(funcao.nome) {
                    let idx = arrayUsers.findIndex(p => p.nome == funcao.nome)
                    if(idx>= 0){
                        arrayUsers[idx].repeticao ? arrayUsers[idx].repeticao=arrayUsers[idx].repeticao+1 :  arrayUsers[idx].repeticao = 1;
                    }
                }

                // if(filterUsers.length>0) filterUsers = filterUsers.filter( u => event.funcoes.every(p => p.nome != u.nome))
                // if(filterUsers.length==0) filterUsers = arrayUsers.filter( u => event.funcoes.every(p => p.nome != u.nome))
               

                   
                    
            }
            
        }
    }

  console.log(arrayUsers.map(p => [p.nome, p.repeticao]).sort((a, b) => b[1] - a[1]))
 
console.log(arrayEscala)
    generateCalendar(arrayEscala)
}

function salvar(array){
  const id = generateID();
  const data = JSON.stringify(array);
  if(localStorage.getItem('salvos')){
    localStorage.
    
    setItem('salvos', JSON.stringify({ id: id, data }));

  }
  var objeto = JSON.parse(localStorage.getItem('data'));
  console.log(JSON.parse(objeto.data));
}

function generateID() {
  // Obter a hora atual
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  // Formatar os componentes da hora como strings de 2 dígitos
  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  // Concatenar os componentes formatados para formar o ID
  const id = formattedHours + formattedMinutes + formattedSeconds;

  return id;
}


function generateCalendar(array){
let html = '';
let pageHtml = document.getElementById('dados');
const diasSemana = [ 'seg', 'ter', 'qua', 'qui', 'sex', 'sab','dom',];
const primeirodia = diasSemana.findIndex(p => p == array[0].d_sem)
const ultimoDia = diasSemana.findIndex(p => p == array[array.length-1].d_sem)

if(primeirodia!=0){
html+= '<div class="row mymodal">'
for(let i=0; i<primeirodia; i++){
    html+= '<div class="col text-center mycard" style="opacity:0"> '
    html+= '<h2 class="text-uppercase day">01</h2>'
    html+= '<h2 class="text-uppercase local" >São Miguel <br> 19h</h2>'
    html+=  ' <div class="col text-center event">'
    html+= ' <h2 class="names"></h2>' 
    html+= ' <h2 class="names"></h2>'
    html+= ' <h2 class="names"></h2>'
    html+= ' </div>'
    html+=  '</div>'
}
}
for(const dia of array){

    html+= dia.d_sem == 'seg' ? '</div><div class="row mymodal">' : ''
    html+= dia.d_sem == 'dom' ? ' <div class="col-4 text-center mycard ">' : ' <div class="col text-center mycard ">'
    html+= '<h2 class="text-uppercase day">'+dia.dia+'</h2>'
    html+= dia.d_sem == 'dom' ? '<div class="row especial">' : ''

    if(dia.events.length==0){
        html+= '<h2 class="text-uppercase local" style="opacity:0" ></h2>'
        html+=  ' <div class="col text-center event">'
        html+= ' <h2 class="names"></h2>' 
        html+= ' <h2 class="names"></h2>'
        html+= ' <h2 class="names"></h2>'
        html+=  '</div>'
        html+=  '</div>'

    }
    else{
        
    for(const event of dia.events){
        
       if(dia.d_sem != 'dom')  html+= '<h2 class="text-uppercase local" >'+event.local+'<br>'+event.horario+'</h2>' 
       if(dia.d_sem == 'dom'){
    
      html+=  dia.events.length==3 && event.horario == '08h00' ? '<div class="col-12">' : '<div class="col-6">' 
      html+= '<h2 class="text-uppercase local" >'+event.local+'-'+event.horario+'</h2>'
       }


       let style = dia.events.length==2 ? 'style="height: auto !important; margin-bottom: 10px;"' : ''
       html+= '<div class="col text-center event "  '+style+'>'
       for(const funcoes of event.funcoes){
          
            html+=  '<h2 class="names func'+funcoes.id+'" data-name='+funcoes.nome+'>'+funcoes.nome+'</h2>'

       }
      html+=  '</div>'
      
      html+= dia.d_sem == 'dom' ? '</div>' : ''

    }

    html+= dia.d_sem == 'dom' ? '</div></div>' : ''

    html+=  '</div>'
    }

}
if(ultimoDia!=6){
    let qtd = 0
    switch(ultimoDia){
        case 0 :
        qtd = 5
        break
        case 1 :
        qtd = 4
        break
        case 2:
        qtd = 3
        break
        case 3 :
        qtd = 2
        break
        case 4 :
        qtd = 1
        break
    }
    for(let i=0; i<qtd; i++){
        html+= '<div class="col text-center mycard" style="opacity:0"> '
        html+= '<h2 class="text-uppercase day">01</h2>'
        html+= '<h2 class="text-uppercase local" >São Miguel <br> 19h</h2>'
        html+=  ' <div class="col text-center event">'
        html+= ' <h2 class="names">jsdsj</h2>' 
        html+= ' <h2 class="names">jsdsj</h2>'
        html+= ' <h2 class="names">jsdsj</h2>'
        html+= ' </div>'
        html+=  '</div>'
    }

   html += '<div class="col-4 text-center mycard  " style="opacity:0">'
   html += '<h2 class="text-uppercase day"></h2>'
   html += '<div class="row especial">'
   html += '  <div class="col-6">'
   html += '    <h2 class="text-uppercase local" >Frei - 19h</h2>'
   html += '    <div class="col text-center event">'
   html += '      <h2 class="names">jsdsj</h2>'
   html += '      <h2 class="names">jsdsj</h2>'
   html += '  </div>'
   html += '  </div>'
   html += '  </div>'
}
html+= '</div></div>'

html+= '<div class="row mt-4 mb-5">'
for(const fun of funcoesArray){
  if(fun.id!=4){
  html+= '<div class="col">'
  html+= '<div class="row" style="color: white; text-transform: uppercase; border-radius: 5px; margin-right: 3px; background: '+fun.color+' ">'
  html+= '<div class="col-3 m-auto">'
  html+= '<img src="../img/funcao'+fun.id+'.png" height="30px"/>'
  html+= '</div>'
  html+= '<div class="col">'
  html+= '<h2 style="font-size: 20px; margin: auto; padding: 5px; margin-left: 5px;">'+fun.descricao+'</h2>'
  html+= '</div>'
  html+= '</div>'
  html+= '</div>'
  }
}
html+= '</div>'

html+= '</div>'
pageHtml.innerHTML = pageHtml.innerHTML+html;
// let elementos = document.querySelectorAll('.names')
// elementos.forEach(elemento => {
//     if (elemento.getAttribute('data-name') !== 'Vitor N') {
//       elemento.setAttribute('style', 'opacity: 0')
//     }
//   });
}
function filtroDia(day, array, numDays){

    let nomes = [];

    array.forEach((evento) => {
      if (evento.dia >= day - numDays && evento.dia <= day) {
        evento.events.forEach((e) => {
          e.funcoes.forEach((funcao) => {
            if (funcao.nome) nomes.push(funcao.nome);
          });
        });
      }
    });
  
    if (nomes.length === 0) return [];
    return nomes;
  }

function filtragemGeral(dia, array, arrayUsers, qtd, dia_sem, idx, local, funcao ){
    // debugger
    let filterUsers = []
    let backup = []
    let nomesusados =filtroDia(dia, array, qtd)
    filterUsers = nomesusados.length>0 ?  arrayUsers.filter(user => !nomesusados.includes(user.nome)) : arrayUsers
    
    backup = filterUsers.filter(p => (p.repeticao ? p.repeticao : 0) <= p.limit )
   
    filterUsers = backup.filter(usuario => verificarCondicoes(usuario, dia_sem, idx, dia, local, funcao));
       
 return filterUsers
}


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
function sortearNome(nomes) {
    // Calcula a soma total dos pesos
    const somaPesos = nomes.reduce((acumulador, nome) => acumulador + nome.peso, 0);
  
    // Gera um número aleatório entre 0 e a soma dos pesos
    const numeroSorteado = Math.random() * somaPesos;
  
    let somaParcial = 0;
    for (let i = 0; i < nomes.length; i++) {
      somaParcial += nomes[i].peso;
      if (numeroSorteado <= somaParcial) {
        return nomes[i].nome;
      }
    }
  }

  // 
// 
// {
    // id: 1, 
    // nome: 'Ana Vitória',
    // funcoes: [
        // {cod: 0,  status: 3},
        // {cod: 1,  status: 3},
        // {cod: 2,  status: 3},
        // {cod: 3,  status: 3},
    // ],
    // condicoes: [
    //    
        // {tipo: 1, dia_semana: ['sex'], sequencia: [1,2,3, 4,5], local: ['São Miguel']},
        // {tipo: 1, dia_semana: ['sab', 'dom'], sequencia: [1,2,3, 4,5], local: ['São Miguel','Paróquia', 'Perpetuo', 'São José', 'Frei Galvão'] },
        // {tipo: 1, dia_semana: ['sab'], sequencia: [1], local: ['São Miguel','Paróquia', 'Perpetuo', 'São José', 'Frei Galvão'] },
        // {tipo: 3, dia_semana: ['feriado'], sequencia: [1,2,3, 4,5], local: ['São Miguel','Paróquia', 'Perpetuo', 'São José', 'Frei Galvão'] },
        // {tipo: 4, dia_semana: [19, 20], sequencia: [1,2,3, 4,5], local: []},
    // ]
    // 
// }
// 1 // dia da semana sem condicoes