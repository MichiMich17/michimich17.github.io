import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import WalletModal from "./WalletModal"
import { useTonConnectUI } from "@tonconnect/ui-react"

export default function WelcomeScreen() {
  const [showModal, setShowModal] = useState(false)
  const [tonConnectUI] = useTonConnectUI()
  const [connected, setConnected] = useState(false)
  const [address, setAddress] = useState("")

  useEffect(() => {
    const unsub = tonConnectUI.onStatusChange((walletInfo) => {
      if (walletInfo && walletInfo.account) {
        setConnected(true)
        setAddress(walletInfo.account.address)
      } else {
        setConnected(false)
        setAddress("")
      }
    })
    return () => unsub()
  }, [tonConnectUI])

  const handleConnectClick = () => {
    // Принудительно закрываем и открываем модалку заново
    setShowModal(false)
    setTimeout(() => setShowModal(true), 50)
  }

  return (
    <div className="relative min-h-screen w-full bg-[url('/bg.gif')] bg-no-repeat bg-center bg-contain"> {/* для десктопов можно добавить - sm:bg-cover */}
      <div className="flex items-start justify-center min-h-screen pt-[600px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-10 w-full max-w-md text-white px-4"
        >
          {!connected ? (
            <button
              onClick={handleConnectClick}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Подключить кошелёк
            </button>
          ) : (
            <button
              onClick={() => console.log("Начать игру")}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Играть
            </button>
          )}
        </motion.div>
        {showModal && <WalletModal isOpen={showModal} onClose={() => setShowModal(false)} />}
      </div>
    </div>
  )
}
