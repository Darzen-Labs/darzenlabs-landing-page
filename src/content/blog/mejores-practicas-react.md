---
title: "Mejores Prácticas en React para 2025"
excerpt: "Descubre las mejores prácticas y patrones modernos de React que todo desarrollador debería conocer para escribir código más limpio y eficiente."
publishDate: 2025-02-01
image: "/src/assets/blog/blog3.avif"
author: "maria-garcia"
category: "desarrollo"
tags: ["react", "javascript", "frontend", "mejores-practicas"]
draft: false
---

# Mejores Prácticas en React para 2025

React continúa evolucionando y con él, las mejores prácticas para escribir código limpio, mantenible y eficiente. En esta guía, exploraremos las técnicas más actuales que todo desarrollador React debería dominar.

## 1. Hooks Personalizados para Lógica Reutilizable

Los hooks personalizados son la forma moderna de compartir lógica entre componentes:

```jsx
// useLocalStorage.js
import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  };

  return [storedValue, setValue];
}
```

## 2. Composición sobre Herencia

Prefiere la composición de componentes sobre la herencia:

```jsx
// ❌ Evitar herencia compleja
class BaseModal extends Component { /* ... */ }
class UserModal extends BaseModal { /* ... */ }

// ✅ Usar composición
const Modal = ({ children, isOpen, onClose }) => (
  isOpen && (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        {children}
      </div>
    </div>
  )
);

const UserModal = ({ user, isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <UserProfile user={user} />
  </Modal>
);
```

## 3. Manejo de Estado con useReducer

Para estado complejo, useReducer es más predecible que useState:

```jsx
const initialState = { count: 0, loading: false, error: null };

function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    case 'reset':
      return { ...state, count: 0 };
    case 'set_loading':
      return { ...state, loading: action.payload };
    case 'set_error':
      return { ...state, error: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}
```

## 4. Optimización de Rendimiento

### React.memo para Componentes Puros
```jsx
const ExpensiveComponent = React.memo(({ data, onUpdate }) => {
  return (
    <div>
      {/* Renderizado costoso */}
    </div>
  );
}, (prevProps, nextProps) => {
  // Comparación personalizada
  return prevProps.data.id === nextProps.data.id;
});
```

### useMemo y useCallback
```jsx
function ProductList({ products, searchTerm }) {
  // Memorizar cálculos costosos
  const filteredProducts = useMemo(() => {
    return products.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);

  // Memorizar funciones para evitar re-renders
  const handleProductClick = useCallback((productId) => {
    // Lógica de click
  }, []);

  return (
    <div>
      {filteredProducts.map(product => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onClick={handleProductClick}
        />
      ))}
    </div>
  );
}
```

## 5. Manejo de Errores con Error Boundaries

```jsx
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-fallback">
          <h2>Algo salió mal</h2>
          <p>{this.state.error?.message}</p>
          <button onClick={() => this.setState({ hasError: false, error: null })}>
            Intentar de nuevo
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
```

## 6. Patrones de Carga de Datos

### Suspense para Carga Asíncrona
```jsx
const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
```

### Custom Hook para Fetch
```jsx
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}
```

## 7. Estructura de Carpetas Recomendada

```
src/
├── components/
│   ├── ui/           # Componentes base reutilizables
│   ├── forms/        # Componentes de formularios
│   └── layout/       # Componentes de layout
├── hooks/            # Custom hooks
├── utils/            # Funciones utilitarias
├── contexts/         # React contexts
├── pages/            # Componentes de página
└── types/            # Definiciones de TypeScript
```

## Conclusión

Estas prácticas te ayudarán a escribir código React más limpio, eficiente y mantenible. Recuerda que las mejores prácticas evolucionan, así que mantente actualizado con las últimas tendencias de la comunidad.

¿Cuáles de estas prácticas ya implementas en tus proyectos? ¡Comparte tu experiencia!
