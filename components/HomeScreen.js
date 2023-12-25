import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Octokit } from "octokit";
import { GITHUB_TOKEN } from '@env';
import Header from '/components/Header'
import RepoCard from '/components/RepoCard'

const octokit = new Octokit({ auth: GITHUB_TOKEN });

export default function HomeScreen({ navigation }) {
    const [repositories, setRepositories] = useState([]);
    const [language, setLanguage] = useState('overall');
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      fetchTrendingRepositories();
    }, [language]);
  
    const fetchTrendingRepositories = async () => {
      let query = 'created:>2023-01-01';
      if (language && language !== 'overall') {
        query += ` language:${language}`;
      }
  
      try {
        setIsLoading(true);
        const response = await octokit.request('GET /search/repositories', {
          q: query,
          sort: 'stars',
          order: 'desc'
        });
        setRepositories(response.data.items);
      } catch (error) {
        setError(error);
        console.error("Error fetching repositories: ", error);
      } finally {
        setIsLoading(false);
      }
    };
  
    const handleLanguageChange = (newLanguage) => {
      setLanguage(newLanguage);
    };
  
    return (
        <View style={styles.container}>
        <Header
          language={language}
          onLanguageChange={handleLanguageChange}
        />
  
        {isLoading
          ? <Text>Loading...</Text>
          : <ScrollView style={styles.scrollView}>
              <View style={styles.cardContainer}>
                {repositories.map(repo => (
                  <RepoCard
                    onPress={() => navigation.navigate('Details', { repo: repo })}
                    key={repo.id}
                    name={repo.name}
                    full_name={repo.full_name}
                    description={repo.description}
                    stargazers_count={repo.stargazers_count}
                    forks_count={repo.forks_count}
                  />
                ))}
              </View>
            </ScrollView>
        }
        
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      width: '100%',
    },
    scrollView: {
      flex: 1,
    },
    cardContainer: {
      alignItems: 'center',
      width: '100%',
    }
  });