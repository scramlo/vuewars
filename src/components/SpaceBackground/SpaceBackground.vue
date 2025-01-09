<script setup lang="ts">
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

import { PARTICLES_PARAMS } from "./constants";

const particlesInit = async (engine: Engine) => {
    await loadFull(engine);
};
</script>

<template>
    <Particles class="h-full w-full" id="particles" :particlesInit="particlesInit" :options="PARTICLES_PARAMS" />
</template>