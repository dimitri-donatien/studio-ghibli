import { onBeforeMount, computed } from "vue";
import { useStore } from "vuex";

export default function useFilter(itemsToFilter, storeNameAction) {
  const store = useStore();
  const isLoaded = computed(() => store.state.ghibli.loading);
  const isErrored = computed(() => store.state.ghibli.error);
  const items = computed(() => store.state.ghibli[itemsToFilter]);

  const filterByName = computed(() => {
    return items.value
      .filter((item) => item.title.toLowerCase())
      .sort((a, b) => a.title.localeCompare(b.title));
  });

  const filteredByScore = computed(() => {
    return items.value
      .filter((item) => item.rt_score >= 95)
      .sort((a, b) => b.rt_score - a.rt_score); // Sort by score in descending order (highest to lowest).
  });

  const filteredByDate = computed(() => {
    return items.value
      .filter((item) => item.release_date >= 2010)
      .sort((a, b) => b.release_date - a.release_date); // sort by date descending order (newest first).
  });

  const formatTime = (time) => {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    return `${hours}h ${minutes}min`;
  };

  onBeforeMount(() => {
    store.dispatch("ghibli/" + storeNameAction);
  });

  return {
    isLoaded,
    isErrored,
    filterByName,
    filteredByScore,
    filteredByDate,
    formatTime,
  };
}
