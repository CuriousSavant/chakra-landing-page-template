import {
    IconButton,
    useColorMode,
    useColorModeValue,
} from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { motion } from 'framer-motion'

const ToggleTheme = () => {
    const { toggleColorMode } = useColorMode()
    return (
        <motion.div
            whileTap={{
                scale: 0.85,
            }}
        >
            <IconButton
                aria-label='Toggle theme'
                colorScheme={useColorModeValue('purple', 'orange')}
                icon={useColorModeValue(<FaMoon />, <FaSun />)}
                onClick={toggleColorMode}
            >
            </IconButton>
        </motion.div>
    )
}

export default ToggleTheme;