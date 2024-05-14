import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import GridImageView from "react-native-grid-image-viewer";
import {
  View,
  ScrollView,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

const image = {
  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoesRcskrviNe-KMOexxB6WWHOMLYJmUXd_RZApSNllQ&s",
};

const ProfileScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.header}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View style={styles.headerContent}>
            <Image
              style={styles.avatar}
              source={{
                uri: "https://media.licdn.com/dms/image/D4E03AQF96sErT1-pBQ/profile-displayphoto-shrink_800_800/0/1692806283350?e=1721260800&v=beta&t=D08UOQqlLOdbqWLhwl4AN3LN8nveJJCUiOdjMjBsCQQ",
              }}
            />
            <Text style={styles.name}>George Speltz</Text>
            <Text style={styles.arroba}>@SpeltzG</Text>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.profileDetail}>
        <View style={[styles.detailContent, { paddingRight: 10, marginRight: 5, borderRightWidth: 2, borderRightColor: "#000" }]}>
          <Text style={styles.count}>182</Text>
          <Text style={styles.title}>Seguidores</Text>
        </View>
        <View style={[styles.detailContent, { paddingRight: 10, marginRight: 5, borderRightWidth: 2, borderRightColor: "#000" }]}>
          <Text style={styles.count}>150</Text>
          <Text style={styles.title}>Seguindo</Text>
        </View>
                <View style={styles.detailContent}>
          <Text style={styles.count}>2</Text>
          <Text style={styles.title}>Publcações</Text>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.buttonOne, { marginRight: 10 }]}>
              <Text style={styles.buttonOneText}>
                <Ionicons
                  name="add-circle-outline"
                  size={18}
                  style={{ color: "#fff" }}
                />{" "}
                Seguir
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonTwo}>
              <Text style={styles.buttonTwoText}>
                <Ionicons
                  name="paper-plane-outline"
                  size={18}
                  style={{ color: "#000" }}
                />{" "}
                Mensagem
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.background}>
            <Text style={styles.headline_text}>Publicaões</Text>
            <View style={styles.imagesGrid}>
              <GridImageView
                data={[
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2bjMPwhQl-3eZwq9wT3NvU543pd6UXDo6msY-TeEJqw&s",
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRliF6rLyDKsxFG-rrjm6WmAQIQ71llqaebYQsa2NjWDg&s",
                ]}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#00CED1",
  },
  headerContent: {
    paddingTop: 70,
    padding: 50,
    height: 305,
    alignItems: "center",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    marginBottom: 2,
    color: "#FFFFFF",
    fontWeight: "400",
  },
  arroba: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "700",
  },
  profileDetail: {
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 275,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    backgroundColor: "#ffd700",
  },
  detailContent: {
    margin: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: "#000",
    fontWeight: 500,
  },
  count: {
    fontSize: 18,
    fontWeight: "bold",
  },
  bodyContent: {
    alignItems: "center",
    padding: 30,
    marginTop: 40,
  },
  textInfo: {
    fontSize: 18,
    marginTop: 20,
    color: "#696969",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  buttonOne: {
    backgroundColor: "#ffff00",
    padding: 8,
    borderRadius: 10,
  },
  buttonTwo: {
    backgroundColor: "#f0e68c",
    padding: 8,
    borderRadius: 10,
  },
  buttonOneText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000",
  },
  buttonTwoText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000",
  },
  description: {
    fontSize: 20,
    color: "#000",
    marginTop: 10,
    textAlign: "center",
  },
  background: {
    backgroundColor: "transparent",
  },
  headline_text: {
    color: "#000",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "600",
    marginTop: 50,
    marginBottom: 5,
    marginLeft: 20,
  },
  explore_text: {
    marginTop: 5,
    marginBottom: 10,
    color: "white",
    marginLeft: 20,
    fontSize: 12,
    fontWeight: "600",
  },
  imagesGrid: {
    flex: 1,
    width: 350,
  },
});

export default ProfileScreen;
