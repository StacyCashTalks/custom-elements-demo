<template>
    <div>
        <h1>Star Wars: The Planets (Demo Backup 😊)</h1>
        <div v-if="planets.length">
            <div v-for="planet in planets" :key="planet.name">
                <h4>Planet Name: {{ planet.name }}</h4>
                <p>Climate: {{ planet.climate }}</p>
                <p>Population: {{ planet.population }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'StarWarsPlanets',
        data() {
            return {
                planets: [] as Planet[]
            }
        },
        mounted() {
            this.getStarWars()
        },
        methods: {
            getStarWars() {
                fetch('https://swapi.dev/api/planets/')
                    .then(response => response.json())
                    .then(data => {
                        const planetResponse = data as PlanetResponse;
                        this.planets = planetResponse.results as Planet[];
                    })
                    .catch(error => console.error('Error fetching planets:', error));
            }
        }
    }

    class Planet {
        name = '' as string;
        climate = '' as string;
        population = '' as string;
    }

    class PlanetResponse {
        results = [] as Planet[];
    }
</script>