const data = [
    "You want a '4 Chair Turn' on The Voice",
    "Opening a Sonny Angel you already have",
    "Rolling a 7 in Catan",
    "Audition for your vape back",
    "This would kill a victorian child",
    "You have to poop but there's 12 other people in the next room",
    "You've been chosen as tribute for The Hunger Games",
    "Revenge Era",
    "The last cigarette in the box",
    "Stuck in an elevator with your crush",
    "You've just discovered electricity",
    "Finding the perfect meme for the groupchat before someone else replies",
    "Voicemail song",
    "Empty parking lot acoustics",
    "You're looking out the window and it's pouring rain",
    "Just sent a risky text",
    "Heartbreak feels good in a place like this",
    "Love at first sight",
    "We saw you from across the bar and we really like your vibe",
    "Where were you on January 6th?",
    "Trina! A One Woman Show, ft. Chicago",
    "The edible is hitting",
    "I work like a dog DAY AND NIGHT"
]

const spin = document.querySelector('#spin');
let prompt = document.querySelector('.prompt');
const complete = document.querySelector('#complete');
const skippedPrompts = [];
const completedPrompts = [];
let randomPromptIndex = 0;
let currentPrompt;

function randomPrompt(arr){
    randomPromptIndex = Math.floor(Math.random() * arr.length);
    return arr[randomPromptIndex]
}

function sangPrompt(arr, index){
    completedPrompts.push(arr[index]);
}

function clearPrompt(){
    currentPrompt = "";
    prompt.innerHTML = "";
}

function generatePrompt(){
    currentPrompt += randomPrompt(data);
    prompt.innerHTML += currentPrompt;

}

spin.addEventListener('click', () => {
clearPrompt();
generatePrompt();
})

complete.addEventListener('click', () => {
    sangPrompt(data, randomPromptIndex);
    data.splice(randomPromptIndex,1);
    clearPrompt();
    generatePrompt();
    console.log(`These are completed prompts: ${completedPrompts} `);
    console.log(`What's left of data prompts ${data} `)
})

chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: 'openSidePanel',
      title: 'Open side panel',
      contexts: ['all']
    });
  });
  
  // chrome.contextMenus.onClicked.addListener((info, tab) => {
  //   if (info.menuItemId === 'openSidePanel') {
  //     // This will open the panel in all the pages on the current window.
  //     chrome.sidePanel.open({ windowId: tab.windowId });
  //   }
  // });
