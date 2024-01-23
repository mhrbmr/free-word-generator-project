function agree() {
  document.getElementById("agreement").style.display = "none";
  document.getElementById("main").style.display = "block";
}

function showUseCases() {
  document.getElementById("main").style.display = "none";
  document.getElementById("use-cases").style.display = "block";
}

function hideUseCases() {
  document.getElementById("use-cases").style.display = "none";
  document.getElementById("main").style.display = "block";
}

async function generateMyWord() {
  const fetchRandomWord = await fetch('https://random-word-api.vercel.app/api?words=1');
  const randomWord = await fetchRandomWord.json();

  # document.getElementById("word").innerHTML = randomWord;

  const fetchWordInfo = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${randomWord}`);
  const wordInfo = await fetchWordInfo.json();

  if (wordInfo.title === "No Definitions Found") {
    document.getElementById("word").innerHTML = randomWord;
    document.getElementById("definition").innerHTML = "Sorry, no definition found for this word via dictionaryapi.dev";
    document.getElementById("definition").style.color = "firebrick";
    document.getElementById("sourc-url").href = 'https://en.wiktionary.org/wiki/';
    document.getElementById("sourc-url").innerHTML = 'https://en.wiktionary.org/wiki/';
  } else {
    const meaning = await wordInfo[0].meanings[0].definitions[0].definition;
    document.getElementById("word").innerHTML = randomWord;
    document.getElementById("definition").style.color = "black";
    document.getElementById("definition").innerHTML = meaning;
    document.getElementById("sourc-url").href = `https://en.wiktionary.org/wiki/${randomWord}`;
    document.getElementById("sourc-url").innerHTML = `https://en.wiktionary.org/wiki/${randomWord}`;
  }
}
