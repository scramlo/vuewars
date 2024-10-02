import type { Category, DDGData } from '@/types';
import { ref, watchEffect, toValue, type Ref } from 'vue'

export default function useScrapeDuckDuckGo(item: () => Category|undefined) {
    const ddgData = ref<DDGData>();
    const imageUrl = ref<string>();

    const scrapeDuckDuckGo = () => {
        const term = toValue(item)?.name;
        if (term) {
            fetch(`https://api.duckduckgo.com/?q=${term}&format=json&iax=images&ia=images`)
            .then((response) => response.json())
            .then((data: DDGData) => {
                ddgData.value = data;
                if (data.Image) {
                    imageUrl.value = `https://duckduckgo.com/` + data.Image;
                } else if (data.RelatedTopics[0]?.Icon?.URL) {
                    // Handle the case when no image is found
                    imageUrl.value = `https://duckduckgo.com/` + data.RelatedTopics[0].Icon.URL;
                } else {
                    imageUrl.value = "";
                }
            })
            .catch((error) => {
                console.error("Error fetching data from DuckDuckGo:", error);
            });
        }
    }

    watchEffect(() => {
        scrapeDuckDuckGo();
    });

    return {
        ddgData,
        imageUrl
    };
}