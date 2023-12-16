async function generateMyWord() {
  const fetchRandomWord = await fetch('https://random-word-api.vercel.app/api?words=1');
  const randomWord = await fetchRandomWord.json();

  const fetchWordInfo = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${randomWord}`);
  const wordInfo = await fetchWordInfo.json();
  
  const meaning = await wordInfo[0].meanings[0].definitions[0].definition;

  document.getElementById("word").innerHTML = randomWord;
  document.getElementById("definition").innerHTML = meaning;
  document.getElementById('word-wrapper').style.display = "block";
}
