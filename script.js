document.addEventListener('DOMContentLoaded', () => {
    // Initialize spark positions and movements
    const sparks = document.querySelectorAll('.spark');
    sparks.forEach(spark => {
        resetSpark(spark);
        // Start each spark at a different time
        spark.style.animationDelay = Math.random() * 3 + 's';
    });

    // Initialize smoke particles
    const smokeParticles = document.querySelectorAll('.smoke-particle');
    smokeParticles.forEach(particle => {
        resetSmokeParticle(particle);
        // Start each particle at a different time
        particle.style.animationDelay = Math.random() * 8 + 's';
    });

    // Handle animation end events to create continuous effect
    sparks.forEach(spark => {
        spark.addEventListener('animationend', () => {
            resetSpark(spark);
        });
    });

    smokeParticles.forEach(particle => {
        particle.addEventListener('animationend', () => {
            resetSmokeParticle(particle);
        });
    });

    // Add interactive elements - make flames react to mouse movement
    const container = document.querySelector('.container');
    const flames = document.querySelectorAll('.flame');
    
    container.addEventListener('mousemove', (e) => {
        const xPos = e.clientX / window.innerWidth - 0.5; // -0.5 to 0.5
        
        flames.forEach((flame, index) => {
            const offsetX = xPos * 20 * (index % 2 === 0 ? 1 : -1);
            flame.style.transform = `translateX(${offsetX}px) scaleY(${1 + Math.abs(xPos) * 0.2})`;
        });
    });
});

function resetSpark(spark) {
    // Random horizontal position within the barn
    const xPos = Math.random() * 280 + 10;
    spark.style.left = `${xPos}px`;
    
    // Random horizontal and vertical movement
    const tx = (Math.random() - 0.5) * 200;
    const ty = Math.random() * 100;
    spark.style.setProperty('--tx', `${tx}px`);
    spark.style.setProperty('--ty', `${ty}px`);
    
    // Random size
    const size = Math.random() * 4 + 2;
    spark.style.width = `${size}px`;
    spark.style.height = `${size}px`;
    
    // Random animation duration
    spark.style.animationDuration = `${Math.random() * 2 + 1}s`;
}

function resetSmokeParticle(particle) {
    // Random horizontal position
    const xPos = Math.random() * 280 + 10;
    particle.style.left = `${xPos}px`;
    
    // Random bottom position
    const yPos = Math.random() * 50;
    particle.style.bottom = `${yPos}px`;
    
    // Random horizontal drift
    const tx = (Math.random() - 0.5) * 200;
    particle.style.setProperty('--tx', `${tx}px`);
    
    // Random size
    const size = Math.random() * 40 + 20;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Random opacity
    particle.style.opacity = Math.random() * 0.3 + 0.1;
    
    // Random animation duration
    particle.style.animationDuration = `${Math.random() * 4 + 4}s`;
}