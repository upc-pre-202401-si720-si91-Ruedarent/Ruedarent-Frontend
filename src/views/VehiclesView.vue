<template>
    <div class="container">
    <h1>Vehiculos</h1>

    <div class="cards">
        <div class="card" data-categoria="scooter">
            <img src="https://i.ibb.co/jZ4dBdT/image.png" alt="Scooter">
            <h2>Scooter Eléctrico</h2>
            <p>Económico, nuevo, eléctrico.</p>
        </div>
        <div class="card" data-categoria="scooter">
            <img src="https://i.ibb.co/C5G2hXP/image.png" alt="Scooter">
            <h2>Scooter Eco</h2>
            <p>Eco, nuevo, eléctrico.</p>
        </div>
        <div class="card" data-categoria="bicicleta">
            <img src="https://i.ibb.co/7z1VtND/image.png" alt="Bicicleta">
            <h2>Bicicleta Eléctrica</h2>
            <p>Económica, eléctrica.</p>
        </div>
        <div class="card" data-categoria="monopatin">
            <img src="https://i.ibb.co/qkbngBd/image.png" alt="Monopatín">
            <h2>Monopatín Eléctrico</h2>
            <p>Popular, nuevo, eléctrico.</p>
        </div>
        <div class="card" data-categoria="patin">
            <img src="https://i.ibb.co/fDWbxv6/image.png" alt="Patín">
            <h2>Patín Eléctrico</h2>
            <p>Económico, nuevo, eléctrico.</p>
        </div>
        <div class="card" data-categoria="Bicicleta">
            <img src="https://i.ibb.co/KrbT3RR/image.png" alt="Bicicleta">
            <h2>Bicicleta</h2>
            <p>Económico, nuevo.</p>
        </div>
    </div>
</div>
</template>

<style>

.container {
padding: 20px;
margin: 0 auto;
}


h1 {
text-align: center;
color: #00BD7E;
margin-bottom: 20px;
font-size: 2.2rem;
}

.cards {
display: flex;
flex-wrap: wrap;
justify-content: space-between;
}

.card {
width: calc(33% - 20px); /* Responsive width based on percentage */
border: 3px solid #ccc;
margin-bottom: 20px;
padding: 15px;
border-radius: 20px;
}
.card img {
border-radius: 20px;
}

/* Added media query for smaller screens */
@media (max-width: 768px) {
.card {
    width: calc(50% - 20px);
}
}

.card img {
width: 100%;
object-fit: cover;
}

.card h2 {
margin: 10px 0;
}

.card p {
margin-bottom: 0;
}

</style>  