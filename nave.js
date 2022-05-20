let pilotName = prompt("Digite o nome do piloto: ")

let spaceShip_name = prompt("Digite o nome da nave: ")

let newVelocit

let speed = 0

while(true) {
    let init = prompt("Opções: \n1.Inicar a nave \n0.Finalizar programa")

    if(init == '1') {
        alert("O piloto " + pilotName + " iniciou a nave " + spaceShip_name+ "!")
        working()
    } else if( init == '0') {
        confirm("Finalizando programa")
        break
    } else {
        alert("Comando invalido!")
    }
}

function working(init) {
    while(true) {
        let control = prompt("Opções:\n1.Aumenta velocidade da nave \n2.Diminuir velocidade da nave \n3.Parar a nave \n4.Status \n0.Finalizar programa")
        if( control == '1') {
            newVelocit = prompt("Aumentar velocidade para: ")
            confirm("Aumentando velocidade em "+newVelocit +"Km/h")
            speed =+ newVelocit
    
        } else if(control == '2') {
            newVelocit = prompt("Diminuir velocidade em: ")
            if(speed == 0) {
                alert("A nave esta parada!")
            } else {
                confirm("Diminuindo velocidade em: " + newVelocit +"Km/h")
                speed = speed - newVelocit
                if(speed < 0) {
                    speed = 0
                    alert("Velocidade Invalida. Reduzindo velocidade para zero!")
                }
            }
    
        } else if(control == '3') {
            confirm("Iniciando processo de parada!")
            speed = 0
    
        } else if(control == '4') {
            alert("Nome do piloto: "+ pilotName + "\nNome da nave: "+ spaceShip_name + "\nVelocidade atual: "+ speed)
            
        } else if(control == '0') {
            confirm("Desligando nave.")
            return init
    
        } else {
            alert("Comando invalido")
        }
    
    }
}