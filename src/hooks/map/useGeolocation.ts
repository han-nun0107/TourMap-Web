import { useEffect, useMemo, useState } from 'react'

type GeolocationState = {
  loaded: boolean
  coordinates?: {
    lat: number
    lng: number
    accuracy: number
  }
  error?: {
    code: number
    message: string
  }
}

export const useGeolocation = () => {
  const isSupported = useMemo(() => {
    return typeof navigator !== 'undefined' && 'geolocation' in navigator
  }, [])

  const [state, setState] = useState<GeolocationState>(() => {
    if (!isSupported) {
      return {
        loaded: true,
        error: { code: 0, message: 'Geolocation not supported' },
      }
    }

    return { loaded: false }
  })

  useEffect(() => {
    if (!isSupported) return

    const watcherId = navigator.geolocation.watchPosition(
      (pos: GeolocationPosition) => {
        setState({
          loaded: true,
          coordinates: {
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
            accuracy: pos.coords.accuracy,
          },
        })
      },
      (err: GeolocationPositionError) => {
        setState({
          loaded: true,
          error: { code: err.code, message: err.message },
        })
      },
      {
        enableHighAccuracy: true,
        timeout: 7000,
        maximumAge: 180000,
      }
    )
    return () => {
      navigator.geolocation.clearWatch(watcherId)
    }
  }, [isSupported])

  return state
}
