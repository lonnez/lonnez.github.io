const tsOptions = {
  particles: {
    move: {
      bounce: true,
      direction: MoveDirection.bottom,
      enable: true,
      random: false,
      speed: 10,
      straight: false
    },
    opacity: {
      random: false,
      value: 0.9
    },
    shape: {
      type: "image",
      image: {
        src: "poop.png",
        width: 100,
        height: 100
      }
    },
    size: {
      random: true,
      value: 50
    },
  },
};

/* tsParticles.load(@dom-id, @options); */
tsParticles.load("tsparticles", tsOptions).then((container) => {
  /* tsParticles.setOnClickHandler(@callback); */
  /* this will be fired from all particles loaded */
  tsParticles.setOnClickHandler((event, particles) => {
    console.log("poop");
  });
});
