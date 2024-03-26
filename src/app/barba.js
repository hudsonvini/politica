// Animations
import { useEffect } from "react";
import barba from '@barba/core';
import { gsap } from "gsap";

useEffect( () => {

    function pageTransiotion() {

      let tl = gsap.timeline();

      tl.to(".trasition"), {
        duration:1,
        scaleY:1,
        transformOrigin: "bottom",
        ease: "power4.inOut",

      }

      tl.to(".trasition"), {
        duration:1,
        scaleY:0,
        transformOrigin: "top",
        ease: "power4.inOut",
        delay: 0.2,
      }
    }

    function delay(n) {
      n = n || 0;
      return new Promise((done) => {
        setTimeout(() => {
          done();
        }, n);
      });
    }


    barba.init({
        sync: true,

        transitions: [{
            async leave(data) {
              const done = this.async();

              pageTransiotion();
              await delay(1000)
              done();
            },
        }]
    });
  })