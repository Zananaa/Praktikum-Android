import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function App() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <ScrollView style={styles.container}>
      {/* Top Balance Section */}
      <View style={styles.balanceSection}>
        <Text style={styles.balanceText}>Rp</Text>
        <Text style={styles.balanceAmount}>
          {isVisible ? "1,000,000" : "•••••••"}
          <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
            <Ionicons
              name={isVisible ? "eye" : "eye-off"}
              color="#fff"
              size={24}
              style={styles.icon}
            />
          </TouchableOpacity>
        </Text>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons
              name={isVisible ? "scan" : "scan"}
              color="#fff"
              size={38}
            />
            <Text style={styles.actionText}>Pindai</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons
              name={isVisible ? "add" : "add"}
              color="#fff"
              size={38}
            />
            <Text style={styles.actionText}>Isi Saldo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons
              name={isVisible ? "enter-outline" : "enter-outline"}
              color="#fff"
              size={38}
            />
            <Text style={styles.actionText}>Kirim</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons
              name={isVisible ? "cash" : "cash"}
              color="#fff"
              size={38}
            />
            <Text style={styles.actionText}>Minta</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Promo Section */}
      <View style={styles.promoSection}>
        <View style={styles.promoTextContainer}>
          <Text style={styles.promoTitle}>Promo Gajian</Text>
          <Text style={styles.promoDescription}>Diskon Rp40Rb + 40%</Text>
        </View>
        <TouchableOpacity style={styles.promoButton}>
          <Text style={styles.promoButtonText}>SERBU</Text>
        </TouchableOpacity>
      </View>

      {/* Services Section */}
      <View style={styles.servicesContainer}>
        <TouchableOpacity style={styles.serviceBox}>
          <Ionicons
            name={
              isVisible ? "phone-portrait-outline" : "phone-portrait-outline"
            }
            color="#007bff"
            size={38}
          />
          <Text>Pulsa & Data</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceBox}>
          <Ionicons
            name={isVisible ? "logo-google-playstore" : "logo-google-playstore"}
            color="#007bff"
            size={38}
          />
          <Text style={styles.iconText}>Google Play Store</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceBox}>
          <Ionicons
            name={isVisible ? "gift-outline" : "gift-outline"}
            color="#007bff"
            size={38}
          />
          <Text>A+ Rewards</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceBox}>
          <Ionicons
            name={isVisible ? "game-controller" : "game-controller"}
            color="#007bff"
            size={38}
          />
          <Text>Games</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceBox}>
          <Ionicons
            name={
              isVisible
                ? "extension-puzzle-outline"
                : "extension-puzzle-outline"
            }
            color="#007bff"
            size={38}
          />
          <Text>Mini Games</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceBox}>
          <Ionicons
            name={isVisible ? "ticket" : "ticket"}
            color="#007bff"
            size={38}
          />
          <Text>DANA Deals</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceBox}>
          <Ionicons
            name={isVisible ? "bulb-outline" : "bulb-outline"}
            color="#007bff"
            size={38}
          />
          <Text>Listrik</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceBox}>
          <Ionicons
            name={isVisible ? "apps" : "apps"}
            color="#007bff"
            size={38}
          />
          <Text>Lihat Semua</Text>
        </TouchableOpacity>
      </View>

      {/* Feed Section */}
      <View style={styles.feedSection}>
        <Text style={styles.feedTitle}>Feed</Text>
        <Text style={styles.feedDescription}>
          Cari tahu kabar terbaru teman-temanmu!
        </Text>
        <TouchableOpacity style={styles.feedButton}>
          <Text style={styles.feedButtonText}>TELUSURI</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  balanceSection: {
    backgroundColor: "#007bff",
    padding: 30,
    marginBottom: 20,
  },
  iconText: {
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
    marginLeft: 5,
  },
  iconFeed: {
    marginTop: 1,
  },
  balanceText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  balanceVisibility: {
    flexDirection: "row",
    alignItems: "center",
  },
  balanceAmount: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 8,
    marginLeft: 8,
  },
  visibilityIcon: {
    fontSize: 18,
    color: "#fff",
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    marginLeft: 1,
  },
  actionButton: {
    alignItems: "center",
    marginTop: 40,
    marginLeft: 1,
    marginRight: 20,
  },
  actionIcon: {
    fontSize: 30,
  },
  actionText: {
    marginTop: 5,
    fontSize: 16,
    color: "#fff",
  },
  promoSection: {
    backgroundColor: "#e3eeff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  promoTextContainer: {
    alignItems: "flex-start",
    flex: 1,
    justifyContent: "space-between",
    height: 40,
  },
  promoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  promoDescription: {
    fontSize: 15,
    color: "#888",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  promoButton: {
    backgroundColor: "#007bff",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  promoButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  servicesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  serviceBox: {
    width: "22%",
    backgroundColor: "#e3eeff",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 5,
  },
  serviceIcon: {
    fontSize: 24,
  },
  feedSection: {
    backgroundColor: "#e3eeff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  feedTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  feedDescription: {
    fontSize: 15,
    color: "#888",
    marginBottom: 10,
  },
  feedButton: {
    alignSelf: "flex-end",
    backgroundColor: "#007bff",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  feedButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
