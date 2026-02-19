import { useRouter } from "expo-router";
import React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER: Registrati in alto a destra */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.registerBtn}>
          <Text style={styles.registerText}>Registrati</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        
        {/* LOGO CENTRALE E GRANDE */}
        <View style={styles.logoWrapper}>
          <Image 
            source={require("../assets/images/logo.png")} 
            style={styles.logoImage}
            resizeMode="contain" 
          />
        </View>

        {/* TITOLO PRINCIPALE */}
        <View style={styles.heroSection}>
          <Text style={styles.heroTitle}>Prenota il tuo{"\n"}appuntamento</Text>
          <Text style={styles.heroSub}>PitGo: La tua officina a portata di click</Text>
        </View>

        {/* BOTTONE PRENOTA ORA (VERDE) */}
        <TouchableOpacity 
          style={styles.bookingCard}
          onPress={() => alert("Servizio Prenotazioni in arrivo!")}
        >
          <View>
            <Text style={styles.bookingTitle}>Prenota ora</Text>
            <Text style={styles.bookingSub}>Scegli l'intervento</Text>
          </View>
          <View style={styles.bookingCircle}>
            <Text style={styles.arrowText}>→</Text>
          </View>
        </TouchableOpacity>

        {/* LISTA VOCI MENU */}
        <View style={styles.menuList}>
          <MenuRow 
            title="Il mio Garage" 
            emoji="🚘" 
            onPress={() => router.push("/garage" as any)} 
          />
          <MenuRow 
            title="I miei interventi" 
            emoji="🔧" 
            onPress={() => alert("Storico interventi")}
          />
          <MenuRow 
            title="Il mio Account" 
            emoji="👤" 
            onPress={() => alert("Profilo utente")}
          />
        </View>

        <Text style={styles.footer}>PITGO © 2026</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

// Componente per le righe del menu
function MenuRow({ title, emoji, onPress }: { title: string, emoji: string, onPress: () => void }) {
  return (
    <TouchableOpacity style={styles.menuRow} onPress={onPress}>
      <View style={styles.menuLeft}>
        <View style={styles.menuIconBox}>
          <Text style={styles.menuEmoji}>{emoji}</Text>
        </View>
        <Text style={styles.menuText}>{title}</Text>
      </View>
      <Text style={styles.menuArrow}>❯</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
  header: { 
    height: 60, 
    flexDirection: 'row', 
    justifyContent: 'flex-end', 
    alignItems: 'center', 
    paddingHorizontal: 20 
  },
  registerBtn: { 
    borderWidth: 1.5, 
    borderColor: "#30D158", 
    paddingHorizontal: 15, 
    paddingVertical: 6, 
    borderRadius: 12 
  },
  registerText: { color: "#30D158", fontWeight: "800", fontSize: 13 },
  content: { paddingHorizontal: 25, paddingBottom: 40 },
  logoWrapper: { 
    alignItems: 'center', 
    justifyContent: 'center', 
    height: 180, // Spazio per il logo
    marginTop: 10 
  },
  logoImage: { 
    width: '85%', 
    height: '100%' 
  },
  heroSection: { marginVertical: 30 },
  heroTitle: { color: "#fff", fontSize: 34, fontWeight: "900", lineHeight: 40 },
  heroSub: { color: "#8E8E93", fontSize: 16, marginTop: 10 },
  bookingCard: { 
    backgroundColor: "#30D158", 
    padding: 24, 
    borderRadius: 25, 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center",
    marginBottom: 35
  },
  bookingTitle: { color: "#000", fontSize: 22, fontWeight: "900" },
  bookingSub: { color: "rgba(0,0,0,0.6)", fontSize: 14, fontWeight: "700" },
  bookingCircle: { width: 42, height: 42, backgroundColor: "#000", borderRadius: 21, justifyContent: "center", alignItems: "center" },
  arrowText: { color: "#30D158", fontSize: 20, fontWeight: "bold" },
  menuList: { gap: 12 },
  menuRow: { 
    backgroundColor: "#1C1C1E", 
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "space-between", 
    padding: 18, 
    borderRadius: 22 
  },
  menuLeft: { flexDirection: "row", alignItems: "center" },
  menuIconBox: { width: 40, height: 40, backgroundColor: "#2C2C2E", borderRadius: 10, justifyContent: "center", alignItems: "center", marginRight: 15 },
  menuEmoji: { fontSize: 20 },
  menuText: { color: "#fff", fontSize: 17, fontWeight: "700" },
  menuArrow: { color: "#3A3A3C", fontSize: 16 },
  footer: { textAlign: "center", color: "#2C2C2E", marginTop: 50, fontSize: 11, letterSpacing: 3 }
});