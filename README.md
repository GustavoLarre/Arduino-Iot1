# Controle IoT de LEDs com Arduino e Node.js

Este projeto demonstra como controlar LEDs conectados a um Arduino Uno de duas maneiras distintas: através de uma interface web interativa utilizando Node.js (com o framework Express e a biblioteca Johnny-Five) e através de um controle físico local com botão utilizando lógica de retenção de estado (Toggle).

## 🚀 Funcionalidades

- **Controle Web (IoT):** Interface gráfica responsiva para ligar e desligar LEDs (Vermelho, Amarelo e Verde) remotamente via requisições HTTP (`fetch`).
- **Controle Físico (Toggle):** Lógica de memória por software com tratamento de ruído (*debounce*) para alternar o estado de um LED utilizando apenas um botão pulsador.

---

## 🛠️ Hardware Necessário

- 1x Arduino Uno (ou compatível)
- 3x LEDs (Vermelho, Amarelo e Verde)
- 1x Botão Pulsador (Push Button)
- 4x Resistores (220Ω ou 330Ω recomendados para os LEDs; 10kΩ para o botão se usado como Pull-Down)
- 1x Protoboard e Jumpers machos

### Esquema de Conexão (Pinos):
- **LED Vermelho:** Pino Digital `8`
- **LED Amarelo:** Pino Digital `9`
- **LED Verde:** Pino Digital `10`
- **LED Standalone (Botão):** Pino Digital `7`
- **Botão Físico:** Pino Digital `6`

---

## 💻 Configuração do Ambiente (Windows)

### 1. Preparação do Arduino
Para o modo **Interface Web**, o Arduino precisa funcionar como um cliente de comandos do Node.js.
1. Abra o **Arduino IDE** e conecte a sua placa ao computador.
2. Selecione a placa correta em `Ferramentas > Placa > Arduino Uno` e a porta em `Ferramentas > Porta`.
3. Vá em `Arquivo > Exemplos > Firmata > StandardFirmata`.
4. Clique em **Carregar** e aguarde a conclusão.
5. *Nota:* Feche o Arduino IDE após o upload para liberar a porta serial para o Node.js.

### 2. Instalação do Projeto Web
Abra o PowerShell ou Prompt de Comando e execute os passos abaixo:

```bash
# Criar a pasta do projeto
mkdir arduino-iot
cd arduino-iot

# Iniciar o projeto Node.js
npm init -y

# Instalar as dependências necessárias
npm install express johnny-five

# Criar a pasta para a interface web
mkdir public
