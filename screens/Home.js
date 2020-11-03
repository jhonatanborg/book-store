import React from "react";
import { View, Text, Image, ScrollView, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLORS, FONTS, SIZES, icons, images } from "../constants";

const LineDivider = () => {
  return (
    <View style={{ width: 1, paddingVertical: 18 }}>
      <View
        style={{
          flex: 1,
          borderLeftColor: COLORS.lightGray,
          borderLeftWidth: 1,
        }}
      ></View>
    </View>
  );
};
const Home = () => {
  const profileData = {
    name: "Jhonatan Borges",
    point: 200,
  };
  const bookOtherWordsForHome = {
    id: 1,
    bookName: "Other Words For Home",
    bookCover: images.otherWordsForHome,
    rating: 4.5,
    language: "Eng",
    pageNo: 341,
    author: "Jasmine Warga",
    genre: ["Romance", "Adventure", "Drama"],
    readed: "12k",
    description:
      "Jude never thought she’d be leaving her beloved older brother and father behind, all the way across the ocean in Syria. But when things in her hometown start becoming volatile, Jude and her mother are sent to live in Cincinnati with relatives. At first, everything in America seems too fast and too loud. The American movies that Jude has always loved haven’t quite prepared her for starting school in the US—and her new label of 'Middle Eastern,' an identity she’s never known before. But this life also brings unexpected surprises—there are new friends, a whole new family, and a school musical that Jude might just try out for. Maybe America, too, is a place where Jude can be seen as she really is.",
    backgroundColor: "rgba(240,240,232,0.9)",
    navTintColor: "#000",
  };
  const bookTheMetropolis = {
    id: 2,
    bookName: "The Metropolis",
    bookCover: images.theMetropolist,
    rating: 4.1,
    language: "Eng",
    pageNo: 272,
    author: "Seith Fried",
    genre: ["Adventure", "Drama"],
    readed: "13k",
    description:
      "In Metropolis, the gleaming city of tomorrow, the dream of the great American city has been achieved. But all that is about to change, unless a neurotic, rule-following bureaucrat and an irreverent, freewheeling artificial intelligence can save the city from a mysterious terrorist plot that threatens its very existence. Henry Thompson has dedicated his life to improving America's infrastructure as a proud employee of the United States Municipal Survey. So when the agency comes under attack, he dutifully accepts his unexpected mission to visit Metropolis looking for answers. But his plans to investigate quietly, quickly, and carefully are interrupted by his new partner: a day-drinking know-it-all named OWEN, who also turns out to be the projected embodiment of the agency's supercomputer. Soon, Henry and OWEN are fighting to save not only their own lives and those of the city's millions of inhabitants, but also the soul of Metropolis. The Municipalists is a thrilling, funny, and touching adventure story, a tour-de-force of imagination that trenchantly explores our relationships to the cities around us and the technologies guiding us into the future.",
    backgroundColor: "rgba(247,239,219,0.9)",
    navTintColor: "#000",
  };
  const bookTheTinyDragon = {
    id: 3,
    bookName: "The Tiny Dragon",
    bookCover: images.theTinyDragon,
    rating: 3.5,
    language: "Eng",
    pageNo: 110,
    author: "Ana C Bouvier",
    genre: ["Drama", "Adventure", "Romance"],
    readed: "13k",
    description:
      "This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!",
    backgroundColor: "rgba(119,77,143,0.9)",
    navTintColor: "#FFF",
  };
  const myBooksData = [
    {
      ...bookOtherWordsForHome,
      completion: "75%",
      lastRead: "3d 5h",
    },
    {
      ...bookTheMetropolis,
      completion: "23%",
      lastRead: "10d 5h",
    },
    {
      ...bookTheTinyDragon,
      completion: "10%",
      lastRead: "1d 2h",
    },
  ];

  const [profile, setProfile] = React.useState(profileData);
  const [myBooks, setMyBooks] = React.useState(myBooksData);

  function renderHeader(profile) {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          paddingHorizontal: SIZES.padding,
          alignItems: "center",
        }}
      >
        <View style={{ flex: 1 }}>
          <View style={{ marginRight: SIZES.padding }}>
            <Text style={{ ...FONTS.h3, color: COLORS.white }}>Bom Dia</Text>
            <Text style={{ ...FONTS.h2, color: COLORS.white }}>
              {profile.name}
            </Text>
          </View>
        </View>
        {/* Points */}
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            height: 40,
            paddingLeft: 3,
            paddingRight: SIZES.radius,
            borderRadius: 20,
          }}
          onPress={() => {
            console.log("Point");
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 30,
                height: 30,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 25,
                backgroundColor: "rgba(0,0,0,0.5)",
              }}
            >
              <Image
                source={icons.plus_icon}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            </View>
            <Text
              style={{
                marginLeft: SIZES.base,
                color: COLORS.white,
                ...FONTS.body3,
              }}
            >
              {profile.point} pontos
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
  function renderButtonSection() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
          padding: SIZES.padding,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            height: 70,
            justifyContent: "center",
            backgroundColor: COLORS.secondary,
            borderRadius: SIZES.radius,
          }}
        >
          {/* Claim */}

          <TouchableOpacity
            style={{
              flex: 1,
            }}
            onPress={() => console.log("claim")}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                padding: SIZES.padding,
              }}
            >
              <Image
                source={icons.claim_icon}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text
                style={{
                  marginLeft: SIZES.base,
                  ...FONTS.body4,
                  color: COLORS.white,
                }}
              >
                Code
              </Text>
            </View>
          </TouchableOpacity>
          {/* Divider */}
          <LineDivider />
          {/* Get Point */}
          <TouchableOpacity
            style={{
              flex: 1,
            }}
            onPress={() => console.log("Get Point")}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                padding: SIZES.padding,
              }}
            >
              <Image
                source={icons.point_icon}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text
                style={{
                  marginLeft: SIZES.base,
                  ...FONTS.body4,
                  color: COLORS.white,
                }}
              >
                Pontuar
              </Text>
            </View>
          </TouchableOpacity>
          <LineDivider />
          <TouchableOpacity
            style={{
              flex: 1,
            }}
            onPress={() => console.log("Get Point")}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                padding: SIZES.padding,
              }}
            >
              <Image
                source={icons.card_icon}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text
                style={{
                  marginLeft: SIZES.base,
                  ...FONTS.body4,
                  color: COLORS.white,
                }}
              >
                Cartão
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  function renderMyBookSection(myBooks) {
    const renderItem = ({ item, index }) => {
      return (
        <TouchableOpacity
          style={{
            flex: 1,
            marginLeft: index == 0 ? SIZES.padding : 0,
            marginRight: SIZES.radius,
          }}
          onPress={() => console.log("My BOOK")}
        >
          {/* BookCover */}
          <Image
            source={item.bookCover}
            resizeMode="cover"
            style={{
              width: 180,
              height: 250,
              borderRadius: 20,
            }}
          />
          {/* Book Info */}
          <View
            style={{
              marginTop: SIZES.radius,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={icons.clock_icon}
              style={{
                width: 15,
                height: 15,
                tintColor: COLORS.lightGray,
              }}
            />
            <Text
              style={{
                marginLeft: 5,
                ...FONTS.body4,
                color: COLORS.lightGray,
              }}
            >
              {item.lastRead}{" "}
            </Text>
            <Image
              source={icons.page_icon}
              style={{
                marginLeft: SIZES.radius,
                width: 15,
                height: 15,
                tintColor: COLORS.lightGray,
              }}
            ></Image>
            <Text
              style={{
                marginLeft: 5,
                ...FONTS.body4,
                color: COLORS.lightGray,
              }}
            >
              {item.completion}
            </Text>
          </View>
        </TouchableOpacity>
      );
    };
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        {/* Header  */}
        <View
          style={{
            paddingHorizontal: SIZES.padding,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              ...FONTS.h2,
              color: COLORS.white,
            }}
          >
            Meus livros
          </Text>
          <TouchableOpacity onPress={() => console.log("See More")}>
            <Text
              style={{
                ...FONTS.body3,
                color: COLORS.lightGray,
                alignSelf: "flex-start",
                textDecorationLine: "underline",
              }}
            >
              Ver mais
            </Text>
          </TouchableOpacity>
        </View>
        {/* Books */}

        <View
          style={{
            flex: 1,
            marginTop: SIZES.padding,
          }}
        >
          <FlatList
            data={myBooks}
            renderItem={renderItem}
            keyExtractor={(item) => `${item.id}`}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.black,
      }}
    >
      <View
        style={{
          height: 180,
        }}
      >
        {renderHeader(profile)}
        {renderButtonSection()}
      </View>
      <ScrollView
        style={{
          marginTop: SIZES.radius,
        }}
      >
        {/* Books Section */}
        <View>{renderMyBookSection(myBooks)}</View>
        {/* Categories Section */}
        <View></View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
