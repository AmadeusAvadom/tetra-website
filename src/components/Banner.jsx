import React from 'react'
import Logo from "../images/logo.png"
export const Banner = () => {
    return (
        <div>
            <section id="banner">
				<div class="content">
					<header>
						<h2>EL futuro del desarrollo de software</h2>
						<p>Tetra Technology es un equipo dedicado <br /> al desarrollo de software, desarrollo web y diseño grafico</p>
					</header>
					<span class="image"><img src={Logo} alt="" /></span>
					</div>
				<a href="#one" class="goto-next scrolly">Next</a>
			</section>
        </div>
    )
}
