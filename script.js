// Defines variables
let dropdownContent, campfireImage, changeTrackBtn, tracks;

// Defines variable for audio element
let audioPlayer = new Audio();

// Function to play a track
function playTrack(trackFile) {
  audioPlayer.pause(); // Pause the audio
  audioPlayer.currentTime = 0; // Reset track to start when paused
  audioPlayer.src = trackFile; // Change the audio source
  audioPlayer.loop = true; // Enable loop for continuous playback
  audioPlayer.play(); // Start playing the new track
}

// Function to show campfire image and stop track playback
function showCampfireImage() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  dropdownContent.style.display = 'none';
  campfireImage.style.display = 'block';
  changeTrackBtn.style.display = 'block';
}

// Function to hide campfire image and resume track playback
function hideCampfireImage() {
  campfireImage.style.display = 'none';
  changeTrackBtn.style.display = 'none';
  if (currentAudio) {
    currentAudio.play();
  }
}

// Function to toggle dropdown visibility
function toggleDropdown() {
  dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
  if (campfireImage.style.display !== 'block') {
    changeTrackBtn.style.display = dropdownContent.style.display === 'block' ? 'block' : 'none';
  }
}

// Execute after window loads
window.onload = function () {
  dropdownContent = document.getElementById('dropdownContent');
  campfireImage = document.getElementById('campfireImage');
  changeTrackBtn = document.getElementById('changeTrackBtn');


// List of tracks with their respective file paths
const tracks = [
  'Music/1-01. Key.mp3',
  'Music/1-02. Door.mp3',
  'Music/1-03. Subwoofer Lullaby.mp3',
  'Music/1-04. Death.mp3',
  'Music/1-05. Living Mice.mp3',
  'Music/1-06. Moog City.mp3',
  'Music/1-07. Haggstrom.mp3',
  'Music/1-08. Minecraft.mp3',
  'Music/1-09. Oxygène.mp3',
  'Music/1-10. Équinoxe.mp3',
  'Music/1-11. Mice On Venus.mp3',
  'Music/1-12. Dry Hands.mp3',
  'Music/1-13. Wet Hands.mp3',
  'Music/1-14. Clark.mp3',
  'Music/1-15. Chris.mp3',
  'Music/1-16. Thirteen.mp3',
  'Music/1-17. Excuse.mp3',
  'Music/1-18. Sweden.mp3',
  'Music/1-19. Cat.mp3',
  'Music/1-20. Dog.mp3',
  'Music/1-21. Danny.mp3',
  'Music/1-22. Beginning.mp3',
  'Music/1-23. Droopy likes ricochet.mp3',
  'Music/2-01. Ki.mp3',
  'Music/2-03. Dead Voxel.mp3',
  'Music/2-04. Blind Spots.mp3',
  'Music/2-05. Flakes.mp3',
  'Music/2-06. Moog City 2.mp3',
  'Music/2-07. Concrete Halls.mp3',
  'Music/2-08. Biome Fest.mp3',
  'Music/2-09. Mutation.mp3',
  'Music/2-10. Haunt Muskie.mp3',
  'Music/2-12. Floating Trees.mp3',
  'Music/2-13. Aria Math.mp3',
  'Music/2-14. Kyoto.mp3',
  'Music/2-15. Ballad of the Cats.mp3',
  'Music/2-16. Taswell.mp3',
  'Music/2-17. Beginning 2.mp3',
  'Music/2-18. Dreiton.mp3',
  'Music/2-20. Chirp.mp3',
  'Music/2-21. Wait.mp3',
  'Music/2-22. Mellohi.mp3',
  'Music/2-23. Stal.mp3',
  'Music/2-24. Strad.mp3',
  'Music/2-25. Eleven.mp3',
  'Music/2-26. Ward.mp3',
  'Music/2-27. Mall.mp3',
  'Music/2-28. Blocks.mp3',
  'Music/2-29. Far.mp3',
  'Music/2-30. Intro.mp3'
];

let currentAudio = null;


  // Populate dropdown with track options
  tracks.forEach(trackFile => {
    const trackOption = document.createElement('a');
    const trackName = trackFile.split('/').pop().replace(/\.(mp3|wav)$/i, ''); // Extracting the song name without extension
    trackOption.textContent = trackName;
    trackOption.href = '#';
    trackOption.onclick = () => {
      playTrack(trackFile);
      showCampfireImage();
      return false; // Prevent default link behavior
    };
    dropdownContent.appendChild(trackOption);
  });

// Attaches click event to the "Change Track" button
changeTrackBtn.onclick = function () {
  hideCampfireImage();
  toggleDropdown();
};
};