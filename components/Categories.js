import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import Svg, { Path } from "react-native-svg";
const Products = [
  "In stock",
  "Irons",
  "Kettles",
  "Washing Machine",
  "Documentários",
];

const Categories = () => {
  const router = useRouter();
  const [selectedCat, setSelectedCat] = useState("In stock");

  const handleCategoryPressIn = (item) => {
    setSelectedCat(item);
  };

  useEffect(() => {
    handleCategoryPressIn("In stock");
  }, []);

  const handleCategoryPressOut = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.categories}>
        <Text>CATEGORIES</Text>
        <FlatList
          data={Products}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.tab, item === selectedCat && styles.tabSelected]}
              onPressIn={() => handleCategoryPressIn(item)}
              onPressOut={handleCategoryPressOut}
            >
              <Text
                style={[
                  styles.tabText,
                  item === selectedCat && styles.tabSelected,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchTop}>
          <Text>SEARCH NOW</Text>
          <TouchableOpacity>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <Path
                d="M7 11H17V13H7V11ZM4 7H20V9H4V7ZM10 15H14V17H10V15Z"
                fill="black"
              />
            </Svg>
          </TouchableOpacity>
        </View>
        <View style={styles.search}>
          <View style={styles.searchBar}>
            <TouchableOpacity>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
              >
                <Path
                  d="M16.5 16L12.9584 12.4521L16.5 16ZM14.9211 7.71053C14.9211 9.49027 14.2141 11.1971 12.9556 12.4556C11.6971 13.7141 9.99027 14.4211 8.21053 14.4211C6.43078 14.4211 4.72394 13.7141 3.46547 12.4556C2.207 11.1971 1.5 9.49027 1.5 7.71053C1.5 5.93078 2.207 4.22394 3.46547 2.96547C4.72394 1.707 6.43078 1 8.21053 1C9.99027 1 11.6971 1.707 12.9556 2.96547C14.2141 4.22394 14.9211 5.93078 14.9211 7.71053V7.71053Z"
                  stroke="#363636"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </Svg>
            </TouchableOpacity>
            <TextInput placeholder="Search" style={styles.searchInput} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  categories: {
    gap: 20,
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 20,
    paddingLeft: 20,
  },

  tab: {
    // flex: 1,
    flexDirection: "row",
    marginHorizontal: 5,
    padding: 10,
  },
  tabSelected: {
    backgroundColor: "#702C45",
    color: "#FFF",
    fontWeight: 700,
    opacity: 1,
    borderRadius: 70,
  },
  tabText: {
    // display: "inline-flex",
    paddingVertical: 2,
    paddingHorizontal: 14,
    color: "black",
    fontWeight: "400",
    opacity: 0.4,
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingVertical: 25,
    gap: 10,
  },
  searchTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  search: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#FFF",
    borderRadius: 4,
    alignSelf: "stretch",
  },
  searchBar: {
    flexDirection: "row",
    gap: 6,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    color: "#78858F",
    width: "100%",
  },
});

export default Categories;
