<template>
    <div>
        <div v-if="error">{{ error }}</div>

        <div v-else-if="images.length" class="image-container">
            <h3>Imágenes de Picsum</h3>
            <div v-for="(image, index) in images" :key="index" class="image-item">
                <img :src="image.download_url" :alt="`Imagen de ${image.author}`" />
                <p><strong>Autor:</strong> {{ image.author }}</p>
                <p><strong>Enlace de descarga:</strong> <a :href="image.download_url" target="_blank">{{ image.download_url }}</a></p>
            </div>
        </div>

        <!-- Mensaje de carga mientras se obtienen los datos -->
        <div v-else>Cargando...</div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            images: [], 
            error: null,
        };
    },
    mounted() {
        const apiUrl = 'https://picsum.photos/v2/list';

        axios.get(apiUrl)
            .then(response => {
                this.images = response.data; 
            })
            .catch(error => {
                this.error = 'Error al obtener los datos de la API de Picsum Photos';
                console.error(error);
            });
    }
};
</script>

<style>
.image-container {
    display: grid;
    grid-template-columns: 1fr 1fr; 
    gap: 20px; 
    max-width: 800px;
    margin: auto;
    text-align: center;
}

.image-item {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.image-item img {
    max-width: 100%;
    border-radius: 8px;
}
</style>
