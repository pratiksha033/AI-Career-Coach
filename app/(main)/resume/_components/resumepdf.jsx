import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 32,
    fontSize: 11,
    fontFamily: "Helvetica",
  },
  header: {
    textAlign: "center",
    marginBottom: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  contact: {
    marginTop: 6,
    fontSize: 10,
  },
  section: {
    marginTop: 14,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 6,
    borderBottom: "1px solid #000",
    paddingBottom: 2,
  },
  text: {
    marginBottom: 4,
    lineHeight: 1.4,
  },
});

export default function ResumePDF({
  name,
  email,
  phone,
  linkedin,
  twitter,
  summary,
  skills,
}) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.contact}>
            {email} {email && phone ? " | " : ""}
            {phone}
          </Text>
          <Text style={styles.contact}>
            {linkedin && "LinkedIn"} {linkedin && twitter ? " | " : ""}
            {twitter && "Twitter"}
          </Text>
        </View>

        {/* SUMMARY */}
        {summary && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Professional Summary</Text>
            <Text style={styles.text}>{summary}</Text>
          </View>
        )}

        {/* SKILLS */}
        {skills && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>
            <Text style={styles.text}>{skills}</Text>
          </View>
        )}
      </Page>
    </Document>
  );
}
