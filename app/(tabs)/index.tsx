import Ionicons from '@expo/vector-icons/Ionicons';
import { Image, ImageBackground } from 'expo-image';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";

const image1 = require("../../assets/images/girl-image.jpg")


const storyData = [
  {
    id: "1",
    name: "Sophia",
    image: image1
  },
  {
    id: "2",
    name: "Olivia",
    image: image1,
  },
  {
    id: "3",
    name: "Avery",
    image: image1,
  },
  {
    id: "4",
    name: "Emily",
    image: image1,
  },
  {
    id: "5",
    name: "Aurora",
    image: image1,
  },
  {
    id: "6",
    name: "Charlotte",
    image: image1,
  },
];

const postData = [
  {
    id: "1",
    name: "Sophia",
    image: image1,
    postImage: image1,
    caption: "This is a caption",
    location: "New York USA",
  },
  {
    id: "2",
    name: "Olivia",
    image: image1,
    postImage: image1,
    caption: "This is a caption",
    location: "New York USA",
  },
  {
    id: "3",
    name: "Avery",
    image: image1,
    postImage: image1,
    caption: "This is a caption",
    location: "New York USA",
  },
  {
    id: "4",
    name: "Emily",
    image: image1,
    postImage: image1,
    caption: "This is a caption",
    location: "New York USA",
  },
  {
    id: "5",
    name: "Aurora",
    image: image1,
    postImage: image1,
    caption: "This is a caption",
    location: "New York USA",
  },
  {
    id: "6",
    name: "Charlotte",
    image: image1,
    postImage: image1,
    caption: "This is a caption",
    location: "New York USA",
  },
  {
    id: "7",
    name: "Sophia",
    image: image1,
    postImage: image1,
    caption: "This is a caption",
    location: "New York USA",
  },
  {
    id: "8",
    name: "Olivia",
    image: image1,
    postImage: image1,
    caption: "This is a caption",
    location: "New York USA",
  },
  {
    id: "9",
    name: "Avery",
    image: image1,
    postImage: image1,
    caption: "This is a caption",
    location: "New York USA",
  },
  {
    id: "10",
    name: "Emily",
    image: image1,
    postImage: image1,
    caption: "This is a caption",
    location: "New York USA",
  },
]

export default function Index() {
  // Combine header, stories, and posts into a single list
  const renderItem = ({ item, index }: {
    item: any;
    index: number;
  }) => {
    if (index === 0) {
      // Header section
      return (
        <View style={styles.headerContainer}>
          <Ionicons name="camera-outline" size={24} color="black" />
          <Text style={styles.headerTitle}>Instacity</Text>
          <Ionicons name="mail-outline" size={24} color="black" />
        </View>
      );
    } else if (index === 1) {
      // Stories section
      return (
        <FlatList
          data={storyData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.storyItem}>
              <View style={styles.storyItemImageContainer}>
                <Image
                  style={styles.storyImage}
                  source={item.image}
                />
              </View>
              <Text style={styles.storyItemName}>{item.name}</Text>
            </View>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.storiesContainer}
          ListHeaderComponent={
            <View style={styles.yourStoryItem}>
              <ImageBackground source={image1} style={styles.yourStoryImage}>
                <Ionicons name="add-circle" size={24} color="#fff" />
              </ImageBackground>
              <Text style={styles.storyItemName}>Add Story</Text>
            </View>
          }
        />
      );
    } else {
      // Posts section (index - 2 to account for header and stories)
      const post = postData[index - 2];
      return (
        <View style={styles.postContainer}>
          {/* Post Header */}
          <View style={styles.postHeader}>
            <View style={styles.postUserInfo}>
              <Image
                style={styles.postUserImage}
                source={post.image}
              />
              <View>
                <Text style={styles.postUserName}>{post.name}</Text>
                <Text style={styles.postLocation}>{post.location}</Text>
              </View>
            </View>
            <Ionicons name="ellipsis-horizontal" size={20} color="black" />
          </View>

          {/* Post Image */}
          <Image
            style={styles.postImage}
            source={post.postImage}
            contentFit="cover"
          />

          {/* Post Actions */}
          <View style={styles.postActions}>
            <View style={styles.postActionLeft}>
              <Ionicons name="heart-outline" size={28} color="black" style={styles.postActionIcon} />
              <Ionicons name="chatbubble-outline" size={24} color="black" style={styles.postActionIcon} />
              <Ionicons name="paper-plane-outline" size={24} color="black" style={styles.postActionIcon} />
            </View>
            <Ionicons name="bookmark-outline" size={24} color="black" />
          </View>

          {/* Post Likes */}
          <Text style={styles.postLikes}>1,234 likes</Text>

          {/* Post Caption */}
          <Text style={styles.postCaption}>
            <Text style={styles.postCaptionUser}>{post.name}</Text> {post.caption}
          </Text>

          {/* Post Comments */}
          <Text style={styles.postComments}>View all 24 comments</Text>

          {/* Post Time */}
          <Text style={styles.postTime}>2 hours ago</Text>
        </View>
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={['header', 'stories', ...postData]} // Combine all data
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]} // Make header sticky
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  storiesContainer: {
    paddingVertical: 10,
    paddingLeft: 10,
    backgroundColor: "#fff",
    gap: 10,
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  yourStoryItem: {
    alignItems: "center",
    marginRight: 5,
  },
  yourStoryImage: {
    width: 72,
    height: 72,
    borderRadius: 37.5,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.8,
  },
  storyItem: {
    alignItems: "center",
  },
  storyItemName: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 5,
  },
  storyItemImageContainer: {
    width: 72,
    height: 72,
    borderRadius: 37.5,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#c13584",
  },
  // Post styles
  postContainer: {
    marginBottom: 20,
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,

  },
  postUserInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postUserImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  postUserName: {
    fontWeight: 'bold',
  },
  postLocation: {
    fontSize: 12,
    color: '#666',
  },
  postImage: {
    width: '100%',
    aspectRatio: 1,
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  postActionLeft: {
    flexDirection: 'row',
  },
  postActionIcon: {
    marginRight: 15,
  },
  postLikes: {
    fontWeight: 'bold',
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  postCaption: {
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  postCaptionUser: {
    fontWeight: 'bold',
  },
  postComments: {
    color: '#666',
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  postTime: {
    color: '#666',
    fontSize: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});