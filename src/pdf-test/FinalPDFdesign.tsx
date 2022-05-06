import pdf from "@react-pdf/renderer";

const FinalPDFdesign = () => {
  const { Text, View, Document, Page } = pdf;

  return (
    <Document>
      <Page
        size="A4"
        style={{
          flexDirection: "column",
          alignItems: "center",
          fontSize: 14,
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 10,
        }}
      >
        <View
          style={{
            width: "100%",
            paddingBottom: 0,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text>Test for PDF</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default FinalPDFdesign;
