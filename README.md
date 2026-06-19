# Controle IoT de LEDs com Arduino e Node.js

Este projeto demonstra como controlar LEDs conectados a um Arduino Uno através de uma interface web interativa utilizando Node.js (com o framework Express e a biblioteca Johnny-Five).
🚀 Funcionalidades

* **Controle Web (IoT):** Interface gráfica responsiva para ligar e desligar LEDs (Vermelho, Amarelo e Verde) remotamente via requisições HTTP (`fetch`) enviadas ao servidor Node.js.

🛠️ Hardware Necessário

* 1x Arduino Uno (ou compatível)
* 3x LEDs (Vermelho, Amarelo e Verde)
* 3x Resistores (220Ω ou 330Ω recomendados para proteger os LEDs)
* 1x Protoboard e cabos Jumpers (macho-macho)

🔌 Esquema e Passo a Passo da Montagem

Para que o projeto funcione corretamente, monte o circuito na protoboard seguindo as conexões abaixo:

### Pinagem (Arduino):
* **LED Vermelho:** Pino Digital 8
* **LED Amarelo:** Pino Digital 9
* **LED Verde:** Pino Digital 10
* **Referencial de Terra:** Pino GND

### Guia de Montagem Passo a Passo:
1. **Linha de Distribuição (GND):** Conecte um jumper de qualquer pino **GND** do Arduino à linha azul (negativa) da protoboard. Isso criará um barramento de terra comum para todos os LEDs.
2. **LED Vermelho:** * Insira o LED na protoboard.
   * Conecte um resistor na **perna maior (Anodo)** do LED e ligue a outra extremidade do resistor ao **Pino 8** do Arduino.
   * Conecte a **perna menor (Catodo)** do LED diretamente na linha azul (GND) da protoboard.
3. **LED Amarelo:** * Conecte o resistor na **perna maior** do LED e ligue a outra extremidade ao **Pino 9** do Arduino.
   * Conecte a **perna menor** do LED na linha azul (GND).
4. **LED Verde:** * Conecte o resistor na **perna maior** do LED e ligue a outra extremidade ao **Pino 10** do Arduino.
   * Conecte a **perna menor** do LED na linha azul (GND).

> *Nota técnica:* Os resistores são obrigatórios para limitar a corrente e evitar que as portas do Arduino ou os LEDs queimem.

💻 Configuração do Ambiente (Windows)

### 1. Preparação do Arduino
Para o modo Interface Web, o Arduino precisa funcionar como um cliente de comandos recebidos do Node.js.
1. Abra o Arduino IDE e conecte a sua placa ao computador via cabo USB.
2. Selecione a placa correta em **Ferramentas > Placa > Arduino Uno** e a porta correspondente em **Ferramentas > Porta**.
3. Vá em **Arquivo > Exemplos > Firmata > StandardFirmata**.
4. Clique em **Carregar** (Upload) e aguarde a conclusão.
5. **Aviso:** Feche o Arduino IDE após o upload completo para liberar a porta serial (COM) para o Node.js.

### 2. Instalação e Execução do Projeto Web
Abra o terminal (PowerShell, Prompt de Comando ou Git Bash) e execute os passos abaixo:

```bash
# 1. Criar a pasta do projeto e entrar nela
mkdir arduino-iot
cd arduino-iot

# 2. Iniciar o projeto Node.js e instalar as dependências
npm init -y
npm install express johnny-five

# 3. Clonar o repositório do projeto

# 4. Iniciar o servidor Node.js
node app.js

Após executar o comando node app.js, abra o seu navegador de preferência e acesse o endereço abaixo para interagir com a interface de controle dos LEDs:

👉 http://localhost:3000/
