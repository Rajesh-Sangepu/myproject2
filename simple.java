// Define a class
class Person {
    String name;
    int age;

    // Constructor
    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Method
    void introduce() {
        System.out.println("Hi, my name is " + name + " and I am " + age + " years old.");
    }
}

// Main class
class Main {
    public static void main(String[] args) {
        // Create an object
        Person person1 = new Person("Alice", 25);
        Person person2 = new Person("Bob", 30);

        // Call methods
        person1.introduce();
        person2.introduce();
    }
}
