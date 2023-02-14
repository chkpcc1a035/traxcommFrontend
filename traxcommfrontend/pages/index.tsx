import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import {
  Affix,
  Avatar,
  BackgroundImage,
  Container,
  Grid,
  Group,
  Input,
  Select,
  Stack,
  Title,
} from "@mantine/core";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const siteData = ['HKDC1', 'HKDC2']

  return (
    <>
      <Grid>
        <Grid.Col span={7}>
          <Container pt={100}>
            <Title
              align="center"
              sx={{
                letterSpacing: "0.1rem",
                color: "#ff6666",
              }}
              order={1}
            >
              Traxcomm AutoComplete Form
            </Title>
            <Stack pt={50} align="center">
              <Group>
                <Avatar>A</Avatar>
                <Avatar>B</Avatar>
                <Avatar>C</Avatar>
                <Avatar>D</Avatar>
              </Group>
              <Title order={4}>Use your data for registration</Title>
              <Select data={siteData} sx={{
                width: '20vw'
              }} label="Site" placeholder="Select site">

              </Select>

              <Input.Wrapper
                id="location"
                withAsterisk
                label="Location"
                description="Please enter visit location"
                error=""
                sx={{
                  width: "20vw",
                }}
              >
                <Input id="location" placeholder="location" />
              </Input.Wrapper>
              <Input.Wrapper
                id="location2"
                withAsterisk
                label="Location2"
                description="Please enter visit location2"
                error=""
                sx={{
                  width: "20vw",
                }}
              >
                <Input id="location2" placeholder="location2" />
              </Input.Wrapper>
              
            </Stack>
          </Container>
        </Grid.Col>
        <Grid.Col span={5}>
          <BackgroundImage
            sx={{
              height: "100vh",
            }}
            src="https://w0.peakpx.com/wallpaper/331/893/HD-wallpaper-data-city-city-abstract-data-circuits.jpg"
          ></BackgroundImage>
        </Grid.Col>
      </Grid>
    </>
  );
}
