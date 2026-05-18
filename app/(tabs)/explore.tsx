import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import useFoodData from "@/hooks/useFoodData";
import useAddFood from "@/hooks/useAddFood";
import useDeleteFood from "@/hooks/useDeleteFood";
import useUpdateFood from "@/hooks/useUpdateFood";

// const DATA = [
//   {
//     title: "Fruits",
//     data: ["Apple", "Banana", "Mango"],
//   },
//   {
//     title: "Vegetables",
//     data: ["Carrot", "Potato", "Tomato"],
//   },
// ];

export default function TabTwoScreen() {
  const { data, isLoading } = useFoodData();
  const mutation = useAddFood();
  const deleteMutation = useDeleteFood();
  const updatedMutation = useUpdateFood();

  return (
    <View style={styles.conatiner}>
      {/* <SectionList
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Text>{item}</Text>}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={{ fontWeight: "bold" }}>{title}</Text>
        )}
      /> */}

      {data?.map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => {
            deleteMutation.mutate(item.id);
          }}
        >
          <Text>{item.title}</Text>
        </TouchableOpacity>
      ))}

      {/* <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                console.log(item.id);
              }}
            >
              <Text>{item?.title}</Text>
            </TouchableOpacity>
          );
        }}
      /> */}

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          mutation.mutate({
            title: " Aloo Tiki",
          });
        }}
      >
        <Text style={styles.textOfAddValue}>Add Value</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={(item) => {
          const lastItem = data?.[data.length - 1];

          if (!lastItem) return;

          updatedMutation.mutate({
            id: lastItem.id,

            updatedFood: {
              title: "Updated Pizza",
            },
          });
        }}
      >
        <Text style={styles.textOfAddValue}>Update Value</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    alignItems: "center",
  },
  button: {
    height: 50,
    width: 200,
    backgroundColor: "yellow",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  textOfAddValue: {
    fontSize: 18,
  },
});
