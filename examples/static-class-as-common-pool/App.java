public class App {

    public static void main(String[] args) {
        Animals dog = new Animals("dog");
        dog.get_similar_animals_pool().set_self_count(2);
        System.out.println("- Updated dog count: " + dog.get_similar_animals_pool().get_self_count());
        System.out.println("Total kinds via Dog: " + dog.get_similar_animals_pool().get_total_kinds());

        System.out.println("\n\n");
        Animals cat = new Animals("cat");
        cat.get_similar_animals_pool().set_self_count(5);
        System.out.println("- Updated cat count: " + cat.get_similar_animals_pool().get_self_count());
        System.out.println("Total kinds via Cat: " + cat.get_similar_animals_pool().get_total_kinds());

        System.out.println("\n\n");
        Animals mice = new Animals("mice");
        mice.get_similar_animals_pool().set_self_count(20);
        System.out.println("- Updated mice count: " + mice.get_similar_animals_pool().get_self_count());
        System.out.println("Total kinds via Mice: " + mice.get_similar_animals_pool().get_total_kinds());
    }

}
