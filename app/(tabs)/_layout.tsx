import { Entypo, EvilIcons, Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#888',
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 80,
          backgroundColor: '#fff',
          paddingTop: 10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <Entypo name="home" size={24} color={color} />,
          tabBarLabel: '',
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons name="search-outline" size={24} color={color} />,
          tabBarLabel: '',
        }}
      />
      <Tabs.Screen
        name="new-post"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons name="add-circle-outline" size={24} color={color} />,
          tabBarLabel: '',
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons name="notifications-outline" size={24} color={color} />,
          tabBarLabel: '',
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <EvilIcons name="user" size={24} color={color} />,
          tabBarLabel: '',
        }}
      />
    </Tabs>
  );
}
