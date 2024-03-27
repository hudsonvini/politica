import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export  const animatePageIn = () => {
    const bannerOne = document.getElementById("banner-1")
    const bannerTwo = document.getElementById("banner-2")
    const bannerTree = document.getElementById("banner-3")
    const bannerFour = document.getElementById("banner-4")

    if(bannerOne && bannerTwo && bannerTree && bannerFour ) {
        const tl = gsap.timeline()

        tl.set([bannerOne, bannerTwo, bannerTree, bannerFour], {
            yPercent: 0,
        }).to([bannerOne, bannerTwo, bannerTree, bannerFour], {
            yPercent: 100,
            stagger: 0.2
        })
    }
}

export const animatePageOut = (href, router) => {
    const bannerOne = document.getElementById("banner-1")
    const bannerTwo = document.getElementById("banner-2")
    const bannerTree = document.getElementById("banner-3")
    const bannerFour = document.getElementById("banner-4")

    if(bannerOne && bannerTwo && bannerTree && bannerFour ) {
        const tl = gsap.timeline()

        tl.set([bannerOne, bannerTwo, bannerTree, bannerFour], {
            yPercent: -100,
        }).to([bannerOne, bannerTwo, bannerTree, bannerFour], {
            yPercent: 0,
            stagger: 0.2,
            onComplete: () => {
                router.push(href)
                setTimeout(() => {
                    animatePageIn()
                }, 500)
            }
        })
    }
}