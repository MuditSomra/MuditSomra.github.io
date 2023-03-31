import { useColorMode, Button, Checkbox, Switch } from "@chakra-ui/react"


function ThemeToggleButton() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Switch
    isChecked={colorMode === "dark"}
    onChange={toggleColorMode}
  >
Dark Mode
  </Switch>

  )
}

export default ThemeToggleButton;
