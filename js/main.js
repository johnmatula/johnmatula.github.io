"use strict";

function detail() {
  return {};
}
"use strict";

function player() {
  return {
    state: {
      visible: false,
      playing: false,
      loaded: false,
      track: {
        title: false,
        caption: false,
        credits: false,
        audio: false,
        level: {
          solo: 1.0,
          mix: 1.0
        }
      },
      sfx: {
        available: false,
        enabled: false,
        label: false,
        audio: false,
        level: {
          mix: 0.0
        }
      }
    },
    initPlayer() {
      console.log("Hello world.mp3!");
    },
    showPlayer(player) {
      this.state.player = player;
    },
    hidePlayer() {
      this.state.player = false;
    },
    playTrack(player) {}
  };
}
"use strict";

window.addEventListener('load', () => {
  document.body.dataset.js = "ready";
});
function base() {
  return {
    getBaseReady() {
      window.addEventListener('load', () => {
        document.body.dataset.alpinejs = "ready";
      });
    }
  };
}
"use strict";
"use strict";
"use strict";

function smarthome() {
  return {
    clockHours: 0,
    clockMinutes: 0,
    clockHoursEl: false,
    clockMinutesEl: false,
    timer: false,
    updateClocks: function (e) {
      e = e || this;
      var date = new Date();
      e.clockHours = date.getHours() % 12;
      e.clockMinutes = date.getMinutes();
      e.clockHours = e.clockHours == 0 ? 12 : e.clockHours;
      e.clockMinutes = (e.clockMinutes < 10 ? "0" : "") + e.clockMinutes;
      e.clockHoursEl = e.clockHoursEl || document.querySelector(".clock__hours");
      e.clockMinutesEl = e.clockMinutesEl || document.querySelector(".clock__minutes");
      if (e.clockHoursEl.textContent != e.clockHours) e.clockHoursEl.textContent = e.clockHours;
      if (e.clockMinutesEl.textContent != e.clockMinutes) e.clockMinutesEl.textContent = e.clockMinutes;
      e.timer = setTimeout(ee => e.updateClocks(ee), 1000);
    }
  };
}
