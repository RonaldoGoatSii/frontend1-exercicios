function verLigacao() {
  const connection =
    navigator.connection ||
    navigator.mozConnection ||
    navigator.webkitConnection;

  const divs = document.querySelectorAll("body > div > div");

  if (!connection) {
    divs[0].textContent = "Network Information API não suportada";
    return;
  }

  divs[0].textContent = "Tipo: " + connection.effectiveType;
  divs[1].textContent = "Velocidade: " + connection.downlink + " Mbps";
  divs[2].textContent = "Latência: " + connection.rtt + " ms";
}

function escolherCor() {
  const cor = prompt("Escolhe uma cor (ex: red, blue, green):");
  document.body.style.backgroundColor = cor;
}



async function escolherCor() {
  if (!window.EyeDropper) {
    alert("EyeDropper API não suportada neste browser");
    return;
  }

  const eyeDropper = new EyeDropper();

  try {
    const resultado = await eyeDropper.open();
    const cor = resultado.sRGBHex;

    console.log("Cor escolhida:", cor);

    document.body.style.backgroundColor = cor;

    if (Notification.permission === "granted") {
      new Notification("Cor selecionada ", {
        body: `Escolheste: ${cor}`
      });
    }

  } catch (erro) {
    console.log("Seleção cancelada");
  }
}